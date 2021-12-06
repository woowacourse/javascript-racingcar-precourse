import CarGame from './game/index.js';
import domManipulate from './dom-manipulate.js'

domManipulate();

let game = new CarGame();

let carNamesSubmit = document.getElementById('car-names-submit');
carNamesSubmit.addEventListener('click', e =>{
    e.preventDefault();
    let userInput = document.getElementById('car-names-input').value;
    
    game.receiveName(userInput);
});

let racingCountSubmit = document.getElementById('racing-count-submit');
racingCountSubmit.addEventListener('click', e =>{
    e.preventDefault();
    let userInput = document.getElementById('racing-count-input').value;

    game.receiveCount(userInput);
});