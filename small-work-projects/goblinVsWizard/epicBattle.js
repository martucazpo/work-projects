function Wizard(name, life, randNum) {
    this.name = name;
    this.life = life;
    this.randNum = randNum;
    this.zap = function () {
        if (this.randNum >= 5) {
            this.life++;
        } else {
            this.life--;
        }
        console.log(this.life);
    };
    this.curse = function () {
        if (this.randNum >= 5) {
            this.life += 2;
        } else {
            this.life -= 2;
        }
        console.log(this.life);
    };
    this.hex = function () {
        if (this.randNum >= 5) {
            this.life += 3;
        } else {
            this.life -= 3;
        }
        console.log(this.life);
    };
}
function Goblin(name, life, randNum) {
    this.name = name;
    this.life = life;
    this.randNum = randNum;
    this.kick = function () {
        if (this.randNum >= 5) {
            this.life++;
        } else {
            this.life--;
        }
        console.log(this.life);
    };
    this.bite = function () {
        if (this.randNum >= 5) {
            this.life += 2;
        } else {
            this.life -= 2;
        }
        console.log(this.life);
    };
    this.scratch = function () {
        if (this.randNum >= 5) {
            this.life += 3;
        } else {
            this.life -= 3;
        }
        console.log(this.life);
    };
}
init();
function epicBattle() {

    fightButton.addEventListener('click', function () {
        fight();
    });
}
epicBattle();
function fight() {
    let wizardLife = 10;
    let goblinLife = 10;
    let wizardRandNum = Math.floor(Math.random() * 10 + 1);
    let goblinRandNum = Math.floor(Math.random() * 10 + 1);
    let goblin = new Goblin("Godrick", goblinLife, goblinRandNum);
    let wizard = new Wizard("Cedric", wizardLife, wizardRandNum);
    let gameNumber = Math.floor(Math.random() * 6 + 1);
    let btnWrapper = document.getElementById('buttonWrappper');

    switch (gameNumber) {
        case 1:
            goblin.bite();
            break;
        case 2:
            goblin.kick();
            break;
        case 3:
            goblin.scratch();
            break;
        case 4:
            wizard.zap();
            break;
        case 5:
            wizard.hex();
            break;
        case 6:
            wizard.curse();
            break;
        default:
            break;
    }

    if (wizard.life > 7 && goblin.life > 7) {
        messageDiv.innerText = "...AND THE BATTLE RAGES ON!";
    } else if (wizard.life > goblin.life) {
        btnWrapper.remove(fightButton);
        messageDiv.innerText = "THE WIZARD HAS WON THE BATTLE!";
    } else {
        btnWrapper.remove(fightButton);
        messageDiv.innerText = "THE GOBLIN WINS THE BATTLE!";
    }
    console.log(wizard);
    console.log(goblin);
    console.log("gameNumber " + gameNumber);
}
function init(){
    const body = document.querySelector('body');
    const main = document.createElement('main');
    body.append(main);
    const headWrapper = document.createElement('div');
    const h1 = document.createElement('h1');
    const p = document.createElement('p');
    headWrapper.append(h1);
    headWrapper.append(p);
    h1.innerText = "GOBLIN VS WIZARD";
    p.innerText = "In The Exciting World of SUBTERRANEAN PRISONS AND FIRE LIZARDS!";
    main.append(headWrapper);
    const buttonWrapper = document.createElement('div');
    buttonWrapper.setAttribute("id", "buttonWrappper");
    buttonWrapper.setAttribute("class", "button-wrapper");
    const fightButton = document.createElement('button');
    fightButton.setAttribute("id", "fightButton");
    fightButton.setAttribute("class", "btn fight-button");
    fightButton.setAttribute("type", "submit");
    fightButton.innerText = 'FIGHT!';
    buttonWrapper.append(fightButton);
    main.append(buttonWrapper);
    const messageWrapper = document.createElement('div');
    messageWrapper.setAttribute("id", "messageWrapper");
    messageWrapper.setAttribute("class", "message-wrapper");
    const messageDiv = document.createElement('div');
    messageDiv.setAttribute("id", "messageDiv");
    messageDiv.setAttribute("class", "message-div");
    messageWrapper.append(messageDiv);
    main.append(messageWrapper);
}
