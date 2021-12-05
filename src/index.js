import CarGame from './game/index.js';

let game = new CarGame();

document.querySelector('form > input[type="text"]').id = 'car-names-input';
document.querySelector('form > input[type="text"] + button').id = 'car-names-submit';

let carNamesSubmit = document.getElementById('car-names-submit');
carNamesSubmit.addEventListener('click', e =>{
    e.preventDefault();
    let userInput = document.getElementById('car-names-input').value;
    
    game.receiveName(userInput);
});

document.querySelector('form > input[type="number"]').id = 'racing-count-input';
document.querySelector('form > input[type="number"] + button').id = 'racing-count-submit';

let racingCountSubmit = document.getElementById('racing-count-submit');
racingCountSubmit.addEventListener('click', e =>{
    e.preventDefault();
    let userInput = document.getElementById('racing-count-input').value;

    game.receiveCount(userInput);
});