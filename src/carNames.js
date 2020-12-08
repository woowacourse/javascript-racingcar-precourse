import { makeRacingCountSubmitButton } from "./racingCounts.js";
import { renderTryCountScreen } from "./renderScreen.js";

function validateCarNames(carNames) {
    const isValid = carNames.every(
        (carName) => 0 < carName.length && carName.length < 6
    );
    return isValid;
}

function getCarNamesInput() {
    const carNamesInput = document.querySelector("#car-names-input");
    return carNamesInput;
}

export function getCarNames() {
    const carNamesInput = getCarNamesInput();
    const carNames = carNamesInput.value.split(",");
    return carNames;
}

export function handleCarNamesSubmitClick() {
    const carNamesInput = getCarNamesInput();
    const carNames = getCarNames();
    const isValid = validateCarNames(carNames);
    if (isValid) {
        renderTryCountScreen();
        makeRacingCountSubmitButton();
    } else {
        resetCarNamesInputValue(carNamesInput);
    }
}

function resetCarNamesInputValue(carNamesInput) {
    alert("차 이름을 다시 입력해주세요");
    carNamesInput.value = "";
    carNamesInput.focus();
}
