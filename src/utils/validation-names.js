import { INPUT_ERROR } from "../constants/constant.js";

const isValidLength = (names) => {
    return names.every((name) => name.length <= 5);
};

const isDuplicated = (names) => {
    const set = new Set([...names]);
    return names.length !== set.size;
};

const isContainedBlank = (names) => {
    return names.some((name) => name.includes(" "));
};

const isContainedNull = (names) => {
    return names.some((name) => name === "");
};

export const validateCarNames = (names) => {
    if (isContainedNull(names)) {
        return INPUT_ERROR.NULL;
    }
    if (!isValidLength(names)) {
        return INPUT_ERROR.INVALID_LENGTH;
    }
    if (isDuplicated(names)) {
        return INPUT_ERROR.DUPLICATED;
    }
    if (isContainedBlank(names)) {
        return INPUT_ERROR.CONTAINED_BLANK;
    }
};
