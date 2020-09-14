let randomNumber = Math.floor(Math.random() * 100 + 1);
console.log(randomNumber);

const guesses = document.querySelector('.guesses');
const lowOrHi = document.querySelector('.lowOrHi');
const lastResult = document.querySelector('.lastResult');

const guessField = document.querySelector('.guessField');
const guessSubmit = document.querySelector('.guessSubmit');

let guessCount = 1;
let resetButton;


function checkGuess() {
    let userGuess = Number(guessField.value);

    if (guessCount === 1) {
        guesses.textContent = 'Previous guess: ';
    }

    guesses.textContent += userGuess + ' ';

    if (userGuess === randomNumber) {
        lastResult.textContent = 'You got it right!!!';
        lastResult.style.backgroundColor = 'green';
        lowOrHi.textContent = '';
        resetgame();
    }

    else if (guessCount === 10) {
        lastResult.textContent = 'Game Over';
        resetgame();
    }
    else {
        lastResult.textContent = 'Wrong';
        lastResult.style.backgroundColor = 'red';

        if (userGuess < randomNumber) {
            lowOrHi.textContent = 'Last gues was too low!!';
        }

        else if (userGuess > randomNumber) {
            lowOrHi.textContent = 'Last guess was too high';
        }
    }

    guessCount++;
    guessField.value = '';
    guessField.focus();
}
guessSubmit.addEventListener('click', checkGuess);

function resetgame() {
    guessField.disabled = true;
    guessSubmit.disabled = true;
    resetButton = document.createElement('button');
    resetButton.textContent = 'Start new game';
    document.body.append(resetButton);
    resetButton.addEventListener('click', resetGame);
}


function resetGame () {
    guessCount = 1;

    const resetParas = document.querySelectorAll('.resultParas p');

    for (i = 0; i < resetParas.length; i++) {
        resetParas[i].textContent = '';
    }

    resetButton.parentNode.removeChild(resetButton);
    guessField.disabled = false;
    guessSubmit.disabled =false;
    guessField.value = '';
    guessField.focus();

    lastResult.style.backgroundColor = 'white';
    guessCount = Math.floor(Math.random() * 100) + 1;

}