import { checkCarNames } from './checkCarNames.js';
import { gameStart } from './gameStart.js';

export function racingGame() {
    const $carNameSubmit = document.querySelector('#car-names-submit');
    const $racingCountSubmit = document.querySelector('#racing-count-submit');

    //자동차 이름 제출버튼 클릭시
    $carNameSubmit.addEventListener('click', checkCarNames);
    $racingCountSubmit.addEventListener('click', gameStart);
}

racingGame();
