import { checkCarNames } from './checkCarNames.js';
import { gameStart } from './gameStart.js';

export function racingGame() {
    const $carNameSubmit = document.querySelector('#car-names-submit');
    const $racingCountSubmit = document.querySelector('#racing-count-submit');

    $carNameSubmit.addEventListener('click', checkCarNames);
    $racingCountSubmit.addEventListener('click', gameStart);
}

racingGame();
