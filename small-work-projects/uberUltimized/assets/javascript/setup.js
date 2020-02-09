import  guessANumber from './script.js';

function setUpGame(){
    const body = document.querySelector('body');
    const main = document.createElement('main');
    const div = document.createElement('div');
    const h1 = document.createElement('h1');
    const p = document.createElement('p');
    const label = document.createElement('label');
    const input = document.createElement('input');
    const button = document.createElement('button');
    const clickMeDiv = document.createElement('div');
    const span = document.createElement('span');

    document.addEventListener('DOMContentLoaded', function(){
        body.append(main);
        main.append(div);
        div.setAttribute("class", "title-div");
        div.append(h1);
        div.append(p);
        div.append(clickMeDiv);
        clickMeDiv.className = "click-me-div";
        clickMeDiv.append(span);
        span.innerText = '+';
        h1.innerText = "CLICK ME TO PLAY A GAME";
        p.innerText = "IF... YOU DARE!";
    });

    clickMeDiv.addEventListener('click', function(){
            div.removeChild(clickMeDiv);
            init();
            guessANumber(); 
    });

    function init(){
        let errorWrapper = document.createElement('div');
        let errorDiv = document.createElement('div');
        let formWrapper = document.createElement('div');
        let forForm = document.createElement('div');
        let formDivOne = document.createElement('div');
        let formDivTwo = document.createElement('div');
        let formDivThree = document.createElement('div');
        let guessWrapper = document.createElement('div');
        let guessDiv = document.createElement('div');
        let messageWrapper = document.createElement('div');
        let messageDiv = document.createElement('div');

        h1.innerText = "Guess A Number";
        p.innerText = "Guess A Number Between One And Ten";
        main.append(errorWrapper);
        errorWrapper.className = "error-wrapper";
        errorWrapper.setAttribute('id','errorWrapper');
        errorDiv.setAttribute("id", "errorDiv");
        errorDiv.className = "error-div";
        errorWrapper.append(errorDiv);
        main.append(formWrapper);
        formWrapper.className = "form-wrapper";
        forForm.className= "form";
        formWrapper.append(forForm);
        formDivOne.className = "form-div";
        label.setAttribute('for', 'guessField');
        label.innerText = "Enter a Guess:";
        formDivOne.append(label);
        formWrapper.append(formDivOne);
        formDivTwo.className = "form-div";
        input.setAttribute('type', 'text');
        input.setAttribute('id', 'guessField');
        input.className = "guess-field";
        formDivTwo.append(input);
        formWrapper.append(formDivTwo);
        formDivThree.className = "form-div";
        button.setAttribute('type', 'submit');
        button.setAttribute('id', 'guessSubmitBtn');
        button.className = "btn guess-submit-btn";
        button.innerText = "Submit Guess";
        formDivThree.append(button);
        formWrapper.append(formDivThree);
        main.append(guessWrapper);
        guessWrapper.className = "guess-wrapper";
        guessDiv.className = "guess-div";
        guessDiv.setAttribute('id', 'guessDiv');
        guessWrapper.append(guessDiv);
        main.append(messageWrapper);
        messageWrapper.className = "message-wrapper";
        messageDiv.className = "message-div";
        messageDiv.setAttribute('id', 'messageDiv');
        messageWrapper.append(messageDiv);
        console.log(body)
    }
}
setUpGame();