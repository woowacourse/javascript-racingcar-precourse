import { ERROR_MSG } from "./constant.js";

export const checkInputValidate = function (value) {
    value = Number(value);
    if (isNaN(value)) {
        alert(ERROR_MSG.is_not_number);
    } else if (value === 0) {
        alert(ERROR_MSG.input_zero);
    } else if (value.length === 0) {
        alert(ERROR_MSG.input_something);
    } else return true;

    return false;
};
