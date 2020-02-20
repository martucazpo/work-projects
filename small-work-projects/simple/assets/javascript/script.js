

const randNum = Math.floor(Math.random() * 10 + 1);
const submitBtn = document.getElementById('guessSubmitBtn');
const guessDiv = document.getElementById('guessDiv');
const messageDiv = document.getElementById('messageDiv');
let guess = 0;

submitBtn.addEventListener("click", function () {
    let playerGuess = document.getElementById('guessField').value;
    let message = "";
    if (playerGuess == randNum) {
        guess++;
        message = "you guessed right!";
        console.log(message)
        guessDiv.innerText = "Guesses " + guess;
        messageDiv.innerText = message;
    } else if (playerGuess < randNum) {
        message = "you guessed too low!";
        guess++;
        console.log(message);
        guessDiv.innerText = "Guesses " + guess;
        messageDiv.innerText = message;
    } else {
        guess++;
        message = "you guessed too high!";
        console.log(message);
        guessDiv.innerText = "Guesses " + guess;
        messageDiv.innerText = message;
    }

    console.log("number" + randNum);
});