const randNum = Math.floor(Math.random() * 10 + 1);
const submitBtn = document.getElementById('guessSubmitBtn');
const errorDiv = document.getElementById('errorDiv');
const guessDiv = document.getElementById('guessDiv');
const messageDiv = document.getElementById('messageDiv');
let guessArr = [];
let guess = 1;


submitBtn.addEventListener("click", function () {
    let playerGuess = document.getElementById('guessField').value;
    
    if (isNaN(playerGuess) === true){
    errorDiv.innerText = "No, not a letter! It burns us! Please enter a number!";
    } else {
    errorDiv.innerText = "";
    playGame(playerGuess);
    }
});

function playGame(playNum){
    let message = "";
    let guessMess = "You have used " + guess + 
        " guess(es). Your current guess is: " + playNum + 
        " and your previous guesses were: " +
        `${guessArr}` + ".";

    if (playNum == randNum) {
        guess++;
        message = "you guessed right!";
        guessArr.push(playNum);
        console.log(guessArr)
        guessDiv.innerHTML = guessMess;
        messageDiv.innerText = message;
    } else if (playNum < randNum) {
        message = "you guessed too low!";
        guess++;
        guessArr.push(playNum);
        console.log(guessArr);
        guessDiv.innerHTML = guessMess;
        messageDiv.innerText = message;
    } else {
        guess++;
        message = "you guessed too high!";
        guessArr.push(playNum);
        console.log(guessArr);
        guessDiv.innerHTML = guessMess;
        messageDiv.innerText = message;
    }
    console.log(guessArr)
    console.log("number " + randNum);
}