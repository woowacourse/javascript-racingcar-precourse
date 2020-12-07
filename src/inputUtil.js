const EMPTY = "";
const nameButton = document.querySelector("#car-names-submit");
const countButton = document.querySelector("#racing-count-submit");

const getCarNameInput = () => {
    return checkEmpty(document.querySelector("#car-names-input").value);
};

const getRacingCountInput = () => {
    return checkEmpty(document.querySelector("#racing-count-input").value);
};

const checkEmpty = (input) => {
    if (input === EMPTY) {
        throw "입력해주세요.";
    }

    return input;
};

export { getCarNameInput, getRacingCountInput, nameButton, countButton };