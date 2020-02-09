export default function guessANumber() {

    const submitBtn = document.getElementById('guessSubmitBtn');
    const errorWrapper = document.getElementById('errorWrapper');
    const errorDiv = document.getElementById('errorDiv');
    const guessDiv = document.getElementById('guessDiv');
    const guessField = document.getElementById('guessField');
    const messageDiv = document.getElementById('messageDiv');
    let randNum = Math.floor(Math.random() * 10 + 1);
    let yesOrNoDivWrapper = document.createElement('div');
    let yesInput = document.createElement('button');
    let noInput = document.createElement('button');
    let guessArr = [];
    let guess = 1;


    submitBtn.addEventListener("click", function () {
        let playerGuess = document.getElementById('guessField').value;

        if (isNaN(playerGuess) === true) {
            errorDiv.innerText = "No, not a letter! It burns us! Please enter a number!";
        } else {
            errorDiv.innerText = "";
            playGame(playerGuess);
        }
    });

    function playGame(playNum) {
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
            guessField.value = '';
            randNum = 0;
            guessMess = '';
            guess = 0;
            playAgain();
        } else if (playNum < randNum) {
            message = "you guessed too low!";
            guess++;
            guessArr.push(playNum);
            console.log(guessArr);
            guessDiv.innerHTML = guessMess;
            messageDiv.innerText = message;
            guessField.value = '';
        } else {
            guess++;
            message = "you guessed too high!";
            guessArr.push(playNum);
            console.log(guessArr);
            guessDiv.innerHTML = guessMess;
            messageDiv.innerText = message;
            guessField.value = '';
        }
        console.log(guessArr)
        console.log("number " + randNum);
    }

    function playAgain() {
        randNum = Math.floor(Math.random() * 10 + 1);
        yesOrNoDivWrapper.className = 'yes-or-no-wrapper';
        yesInput.className = 'yes-input';
        noInput.className = 'no-input';
        yesInput.innerText = 'click here if YES';
        noInput.innerText = 'click here if NO';
        yesInput.setAttribute('type', 'submit');
        noInput.setAttribute('type', 'submit');
        errorWrapper.append(yesOrNoDivWrapper);
        yesOrNoDivWrapper.append(yesInput);
        yesOrNoDivWrapper.append(noInput);
        errorDiv.innerText = "Would You Like To Play Again? ";

        yesInput.addEventListener('click', function () {
            let playerGuess = document.getElementById('guessField').value;
            yesOrNoDivWrapper.remove(yesInput);
            yesOrNoDivWrapper.remove(noInput);
            guessArr = [];
            errorDiv.innerText = '';
            messageDiv.innerText = '';
            playGame(playerGuess);
        });

        noInput.addEventListener('click', function () {
            location.reload();
        })
    }
}