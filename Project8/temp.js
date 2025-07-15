document.getElementById("evaluate").addEventListener("click", () => {
  const input = document.getElementById("expression").value;
  try {
    const result = evaluateExpression(input);
    document.getElementById("result").textContent = `Result: ${result}`;
    document.getElementById("result").style.color = "green";
  } catch (err) {
    document.getElementById("result").textContent = `Error: ${err.message}`;
    document.getElementById("result").style.color = "red";
  }
});

// Main Evaluator
function evaluateExpression(expr) {
  const tokens = tokenize(expr.replace(/\s+/g, ''));
  const [result] = parseExpression(tokens);
  return result;
}

// Tokenizer: turns "2+(3*4)" into ["2", "+", "(", "3", "*", "4", ")"]
function tokenize(expr) {
  const tokens = [];
  let num = '';
  for (let char of expr) {
    if (/\d|\./.test(char)) {
      num += char;
    } else {
      if (num) {
        tokens.push(num);
        num = '';
      }
      if ('()+-*/'.includes(char)) {
        tokens.push(char);
      } else {
        throw new Error(`Invalid character: ${char}`);
      }
    }
  }
  if (num) tokens.push(num);
  return tokens;
}

// Recursive descent parser
function parseExpression(tokens, index = 0) {
  const ops = [];
  const vals = [];

  function applyOperator() {
    const b = vals.pop();
    const a = vals.pop();
    const op = ops.pop();
    if (op === '+') vals.push(a + b);
    else if (op === '-') vals.push(a - b);
    else if (op === '*') vals.push(a * b);
    else if (op === '/') vals.push(a / b);
  }

  function precedence(op) {
    return (op === '+' || op === '-') ? 1 : 2;
  }

  while (index < tokens.length) {
    const token = tokens[index];

    if (!isNaN(token)) {
      vals.push(parseFloat(token));
    } else if (token === '(') {
      const [val, newIndex] = parseExpression(tokens, index + 1);
      vals.push(val);
      index = newIndex;
    } else if (token === ')') {
      break;
    } else if ('+-*/'.includes(token)) {
      while (
        ops.length &&
        precedence(ops[ops.length - 1]) >= precedence(token)
      ) {
        applyOperator();
      }
      ops.push(token);
    }

    index++;
  }

  while (ops.length) {
    applyOperator();
  }

  return [vals.pop(), index];
}
