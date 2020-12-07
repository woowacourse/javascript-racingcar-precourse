const EMPTY = "";
const nameButton = document.querySelector("#car-names-submit");
const countButton = document.querySelector("#racing-count-submit");
const nameInput = document.querySelector("#car-names-input");
const countInput = document.querySelector("#racing-count-input");
const restartButton = `<button id=restart-button>다시하기</button>`;

const getCarNameInput = () => {
    return checkEmpty(nameInput.value);
};

const getRacingCountInput = () => {
    return checkEmpty(countInput.value);
};

const checkEmpty = (input) => {
    if (input === EMPTY) {
        throw "입력해주세요.";
    }

    return input;
};

const chooseRestartButton = () => {
    return document.querySelector("#restart-button");
};

export { getCarNameInput, getRacingCountInput, chooseRestartButton, nameButton, countButton, nameInput, countInput, restartButton };