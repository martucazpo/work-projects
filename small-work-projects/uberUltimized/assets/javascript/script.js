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
    let guessMess = '';
    let message = '';
    let guessArr = [];
    let guess = 1;


    submitBtn.addEventListener("click", function () {
        let playerGuess = document.getElementById('guessField').value;
        let playerNumber = parseInt(playerGuess);

        if(playerGuess === ''){
            errorDiv.innerText = "Please enter a number between one and ten.";
        }
        else if (isNaN(playerNumber) === true) {
            errorDiv.innerText = "No, not a letter! It burns us! Please enter a number!";
        } else {
            errorDiv.innerText = "";
            playGame(playerNumber);
        }

    }); 

    function playGame(playNum) {
        let prevGuess = guessArr.toString().replace(',',' ');
        messageDiv.innerText = '';
        guessDiv.innerHTML = '';
        guessMess = "You have used " + guess +
            " guess(es). Your current guess is: " + playNum +
            " and your previous guess(es) were/was: " +
            `${prevGuess}` + ".";
        message = '';

        if (playNum == randNum) {
            message = '';
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
            message = '';
            message = "you guessed too low!";
            guess++;
            guessArr.push(playNum);
            console.log(guessArr);
            guessDiv.innerHTML = guessMess;
            messageDiv.innerText = message;
            guessField.value = '';
        } else {
            message = '';
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
        yesInput.className = 'btn yes-input';
        noInput.className = 'btn no-input';
        yesInput.innerText = 'click here if YES';
        noInput.innerText = 'click here if NO';
        yesInput.setAttribute('type', 'submit');
        noInput.setAttribute('type', 'submit');
        errorWrapper.append(yesOrNoDivWrapper);
        yesOrNoDivWrapper.append(yesInput);
        yesOrNoDivWrapper.append(noInput);
        errorDiv.innerText = "Would You Like To Play Again? ";
        guessDiv.innerHTML = '';
        messageDiv.innerText = '';
        message = '';
        guessMess = '';
        guess = 0;
        guessArr = [];

        yesInput.addEventListener('click', function () {
            let playerGuess = document.getElementById('guessField').value;
            let playerNumber = parseInt(playerGuess);
            yesOrNoDivWrapper.remove(yesInput);
            yesOrNoDivWrapper.remove(noInput);
            guessMess = '';
            message = '';
            guess = 1;
            guessArr = [];
            errorDiv.innerText = '';
            guessDiv.innerHTML = '';
            messageDiv.innerText = '';
            if(isNaN(playerNumber === false)){
            playGame(playerNumber);
            } else {
                message = 'please enter a number';
            }
        });

        noInput.addEventListener('click', function () {
            location.reload();
        })
    }
}