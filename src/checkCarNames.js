import { getCarNames } from './getCarNames.js';
import { enalbedElement, disabledElement } from './setAttribute.js';

function carNameValid(carNames) {
    if (!carNames.every((car) => car.length < 5)) {
        alert("잘못된 입력입니다! 자동차 이름은 5자 이하만 가능합니다!");
        return false;
    }
    else if (!carNames.every((car) => car.length !== 0)) {
        alert("잘못된 입력입니다! 자동차 이름은 공백일 수 없습니다!");
        return false;
    }
    return true;
}

export function checkCarNames() {
    const $carNameInput = document.querySelector('#car-names-input');
    const $racingCountSubmit = document.querySelector('#racing-count-submit');
    const $carNameSubmit = document.querySelector('#car-names-submit');
    const $racingCountInput = document.querySelector('#racing-count-input');

    const carNames = getCarNames($carNameInput);

    if (!carNameValid(carNames)) {
        $carNameInput.value = '';
    }
    else {
        enalbedElement($racingCountInput);
        enalbedElement($racingCountSubmit);
        disabledElement($carNameSubmit);
        disabledElement($carNameInput);
    }
}
