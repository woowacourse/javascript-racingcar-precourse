import { startGame } from './utils.js';
import { carNamesButtonEvents } from './input.js';
import { BUTTON } from './constants.js';

export default function RacingCarGame() {
    startGame(this);
    console.log(this);

    BUTTON.CAR_NAMES_BUTTON.addEventListener('click', (e) => {
        carNamesButtonEvents(e);
        BUTTON.RACING_COUNT_BUTTON.disabled = false;
    });
    BUTTON.RACING_COUNT_BUTTON.addEventListener('click', );

    console.log(this.numberOfCars, this.totalCount);
}
new RacingCarGame();