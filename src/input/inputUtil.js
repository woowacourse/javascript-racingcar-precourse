const EMPTY = "";
export const nameButton = document.querySelector("#car-names-submit");
export const countButton = document.querySelector("#racing-count-submit");
export const nameInput = document.querySelector("#car-names-input");
export const countInput = document.querySelector("#racing-count-input");

export const getCarNameInput = () => {
    return checkEmpty(nameInput.value);
};

export const getRacingCountInput = () => {
    return checkEmpty(countInput.value);
};

const checkEmpty = (input) => {
    if (input === EMPTY) {
        throw "입력해주세요.";
    }

    return input;
};
