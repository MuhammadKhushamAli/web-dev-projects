class ExpressionValidator {
    #expression;

    // Constructor
    constructor(expression)
    {
        this.#expression = expression;
        this.#expression = this.#expression.replace(/\s+/g, '');
    }

    // Private Methods

    // Wraper Function - Give index of ( and )
    #parenthesisDetector(exp) {
        try {
            if (typeof exp != "string") {
                throw TypeError("The Experession Must be in String Type");
            }
            // It detect the location of Parenthesis in Expression
            function detector(endIndex = 0, startIndex = -1) {
                if (endIndex == exp.length) {
                    return [-1, -1];
                }
                else if (exp[index] == '(') {
                    startIndex = endIndex;
                }
                else if (exp[endIndex] == ')') {
                    return [startIndex, endIndex];
                }

                return detector(++endIndex, startIndex);
            }
            return detector();
        }
        catch (error) {
            console.error(`Parenthesis Detector: ${error}`);
        }
    }

    // It Takes Sub-Expression and Evaluate using BODMAS Rule
    #operatorSelectors(subExpression) {
        // Division
        let [val, index] = this.#performDivision(subExpression);

        while (val != -1) {
            subExpression[index] = val;
            subExpression[index + 1] = '';
            subExpression[index - 1] = '';

            [val, index] = this.#performDivision(subExpression);
        }

        // Multiplication
        [val, index] = this.#performMultiplication(subExpression);

        while (val != -1) {
            subExpression[index] = val;
            subExpression[index + 1] = '';
            subExpression[index - 1] = '';

            [val, index] = this.#performMultiplication(subExpression);
        }

        // Addition
        [val, index] = this.#performAddition(subExpression);

        while (val != -1) {
            subExpression[index] = val;
            subExpression[index + 1] = '';
            subExpression[index - 1] = '';

            [val, index] = this.#performAddition(subExpression);
        }

        // Subtraction
        [val, index] = this.#performSubtraction(subExpression);

        while (val != -1) {
            subExpression[index] = val;
            subExpression[index + 1] = '';
            subExpression[index - 1] = '';

            [val, index] = this.#performSubtraction(subExpression);
        }

        return subExpression;
    }

    // It Performs Division
    #performDivision(subExpression) {
        for (const element of subExpression) {
            if (element === '/') {
                let index = subExpression.indexOf(element);

                let first = subExpression[index - 1];

                let second = subExpression[index + 1];

                return [(first / second), index];
            }
        }
        return [-1, -1];
    }

    // It Performs Multiplication
    #performMultiplication(subExpression) {
        for (const element of subExpression) {
            if (element === '*') {
                let index = subExpression.indexOf(element);

                let first = subExpression[index - 1];

                let second = subExpression[index + 1];

                return [(first * second), index];
            }
        }
        return [-1, -1];
    }

    // It Performs Addition
    #performAddition(subExpression) {
        for (const element of subExpression) {
            if (element === '+') {
                let index = subExpression.indexOf(element);

                let first = subExpression[index - 1];

                let second = subExpression[index + 1];

                return [(first + second), index];
            }
        }
        return [-1, -1];
    }
    
    // It Performs Subttraction
    #performSubtraction(subExpression) {
        for (const element of subExpression) {
            if (element === '-') {
                let index = subExpression.indexOf(element);
    
                let first = subExpression[index - 1];
    
                let second = subExpression[index + 1];
    
                return [(first - second), index];
            }
        }
        return [-1, -1];
    }

    // It Calculate the Expression
    calculator()
    {
        let [start, end] = this.#parenthesisDetector(this.#expression);
        let result = '';

        while(start == -1)
        {
            result = this.#operatorSelectors(this.#expression.slice(start + 1, end));
            this.#expression[start] = result;
            
            for (let i = start + 1; i <= end; i++)
            {
                this.#expression[i] = '';    
            }

            [start, end] = this.#parenthesisDetector(this.#expression);
        }
        this.#expression = this.#operatorSelectors(this.#expression);
    }

    // It Print Result
    printResult()
    {
        console.log(`Result: ${this.#expression}`);
    }
};

const expression = new ExpressionValidator('3 + 2 - 1');
expression.calculator();
expression.printResult();
