import { INPUT_ERROR } from "../constants/constant.js";

const isValidLength = (names) => {
    return names.every((name) => name.length <= 5);
};

export const validateCarNames = (names) => {
    console.log(isValidLength(names));
    if (!isValidLength(names)) {
        return INPUT_ERROR.INVALID_LENGTH;
    }
};
