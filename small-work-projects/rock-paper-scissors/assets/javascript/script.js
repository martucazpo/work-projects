const rps = ['rock', 'paper', 'scissors'];
const btns = document.querySelectorAll('span');
const computerScoreDiv = document.getElementById('computerScore');
const playerScoreDiv = document.getElementById('playerScore');
const messageDiv = document.getElementById('messageDiv');
const choicesDiv = document.getElementById('choicesDiv');
let playerScore = 0;
let computerScore = 0;

console.log(btns);

btns.forEach(function (button) {
    button.addEventListener('click', function () {
        const computerGuess = rps[random(0, 2)];
        let playerGuess = button.dataset.value;
        playGame(computerGuess, playerGuess);
    });
});


function random(min, max) {
    const num = Math.floor(Math.random() * (max - min + 1)) + min;
    return num;
}

function playGame(computerGuess, playerGuess) {
    playerScoreDiv.innerHTML = "The player's score is: " + playerScore;
    computerScoreDiv.innerHTML = "The computer's score is: " + computerScore;
    choicesDiv.innerHTML = "The player chooses " + playerGuess + " and the computer has chosen " + computerGuess + "!";
    console.log('player guess is ' + playerGuess);
    console.log('computer guess is ' + computerGuess);
    if (computerGuess === 'rock') {
        switch (playerGuess) {
            case 'rock':
                gameTie();
                break;
            case 'paper':
                playerWin();
                break;
            case 'scissors':
                computerWin();
                break;
            default:
                break;
        }
    } else if (computerGuess === 'paper') {
        switch (playerGuess) {
            case 'rock':
                computerWin();
                break;
            case 'paper':
                gameTie();
                break;
            case 'scissors':
                playerWin();
                break;
            default:
                break;
        }
    } else if (computerGuess === 'scissors') {
        switch (playerGuess) {
            case 'rock':
                playerWin();
                break;
            case 'paper':
                computerWin();
                break;
            case 'scissors':
                gameTie();
                break;
            default:
                break;
        }
    } else {
        console.log('There is a problem...');
    }

}

function gameTie() {
    messageDiv.innerHTML = 'this game is tied';
}

function computerWin() {
    computerScore++;
    computerScoreDiv.innerHTML = "The computer's score is: " + computerScore;
    messageDiv.innerHTML = 'the computer won';
}

function playerWin() {
    playerScore++;
    playerScoreDiv.innerHTML = "The player's score is: " + playerScore;
    messageDiv.innerHTML = 'the player won';
}