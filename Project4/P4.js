const form = document.querySelector('form');
const guessField = form.querySelector('#guess');
const resultContainer = document.querySelector('#resultAlert');
const resultMessage = resultContainer.querySelector('.result');
const previousGuesses = document.querySelector('.previousguesses');
const remainingTries = document.querySelector('.remainingtry');
const controls = form.querySelector('.ctrl-buttons');

let randomNumber = Math.round((Math.random() * 100) + 1);
let remainingGuesses = 10;

let isGameStart = true;

// It let the game to start
function startGame() { 
    randomNumber = Math.round((Math.random() * 100) + 1); 
    isGameStart = true;
    remainingGuesses = 10;
    remainingTries.innerText = remainingGuesses;
    previousGuesses.innerHTML = '';
    guessField.removeAttribute('disabled', '');
    controls.innerHTML = '<input type="submit" value="Submit" class="btn btn-danger" />';
}
startGame();


// It let stop the game
function endGame() {
    isGameStart = false;
    guessField.setAttribute('disabled', '');

    controls.innerHTML = '<input type="button" value="Start Again" class="btn btn-light text-dark" />';
    controls.childNodes[0].addEventListener('click', () => {
        startGame();
    });

}

// It display the result
function displayResult(message) {
    try {
        if (typeof message !== 'string') {
            throw TypeError('Message must be a string');
        }
        resultMessage.innerText = message;
        resultContainer.style.display = 'block';
        resultContainer.classList.add('show');

        // Auto Hide
        setTimeout(() => {
            resultContainer.classList.remove('show');
        }, 1000)
    }
    catch (error) {
        console.error(error.message);
    }
}

// It Generate Message according to Guess
function generateMessage(guessNumber) {
    if (isGameStart) {
        if (guessNumber == randomNumber) {
            displayResult('Hurray! You Won.');
            endGame();
        }
        else if (guessNumber > randomNumber) {
            displayResult('Your Number is Too Large.');
        }
        else {
            displayResult('Your Number is Too Small.')
        }
        gameConditionsMaintainer(guessNumber);
    }
}

// Guess Validator
function guessValidator(guessNumber) {
    if (isGameStart) {
        if (guessNumber == '' || guessNumber < 1
            || guessNumber > 100 || isNaN(guessNumber)
        ) {
            displayResult('Invalid Input!');
            return;
        }
        generateMessage(guessNumber);
    }
}

// It Update the Conditions
function gameConditionsMaintainer(guessNumber) {
    guessField.value = '';
    previousGuesses.innerText += ` ${guessNumber}`;
    remainingGuesses--;
    remainingTries.innerText = remainingGuesses;

    if (remainingGuesses == 0) {
        displayResult(`You Lose the Game
            The Number Was ${randomNumber}`);
        endGame();
    }

}

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const guessNumber = parseInt(guessField.value);
    guessValidator(guessNumber);

})