import { startGame, playGame, endGame } from './utils.js';
import { carNamesButtonEvents, racingCountButtonEvents } from './input.js';
import { BUTTON, CLASS } from './constants.js';

export default function RacingCarGame() {
    startGame(this);

    BUTTON.CAR_NAMES_BUTTON.addEventListener('click', function() {
        carNamesButtonEvents(this);
        CLASS.GAMEBOARD_RACING_COUNT.style.display = 'block';
    });

    BUTTON.RACING_COUNT_BUTTON.addEventListener('click', function() {
        racingCountButtonEvents(this);
        playGame(this, this.carList);
        endGame(this.carList);
        CLASS.RESULTBOARD.style.display = 'block';
    });
}

new RacingCarGame();