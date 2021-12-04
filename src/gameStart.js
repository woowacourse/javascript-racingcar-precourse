import { getCarNames } from './getCarNames.js';
import { CAR } from './constant.js';
import { checkRacingCount } from './checkRacingCount.js';
import { disabledElement } from './setAttribute.js';
import { getGameResult } from './getGameResult.js';

//각 자동차 진행상황 프린트
function printEachCarProgress(CARS) {
    for (let car of CARS) {
        const randomNumber = MissionUtils.Random.pickNumberInRange(0, 9);
        console.log(randomNumber);
        if (randomNumber >= 4) {
            car.PLUS_FORWARD();
        }
        document.querySelector('body').innerHTML += `<p class="gameProgress">${car.name} : ${car.gameProgress}</p>`;
    }
}

//게임진행 보여주기
function printGameProgress(CARS, $racingCountInput) {
    for (let i = 0; i < $racingCountInput.value; i++) {
        printEachCarProgress(CARS);
        document.querySelector('body').innerHTML += '<br>';
    }
}

//레이싱게임 시작
export function gameStart() {
    const $carNameInput = document.querySelector('#car-names-input');
    const $racingCountInput = document.querySelector('#racing-count-input');
    const $racingCountSubmit = document.querySelector('#racing-count-submit');

    if (!checkRacingCount($racingCountInput)) {
        return;
    }

    disabledElement($racingCountInput);
    disabledElement($racingCountSubmit);

    const carNames = getCarNames($carNameInput);
    const CARS = carNames.map(name => new CAR(name));

    printGameProgress(CARS, $racingCountInput);
    getGameResult(CARS);
}
