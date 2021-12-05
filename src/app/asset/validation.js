import { CAR_NAMES_INPUT_MSG } from './constant';

const checkCarNameFunctions = [
    (names) => {
        if (names.every((name) => name.length < 1 || name.length > 5)) {
            alert(CAR_NAMES_INPUT_MSG.length);
            return false;
        }

        return true;
    },
    (names) => {
        if (names.every((name) => name.length !== name.replace(/\s/g, '').length)) {
            alert(CAR_NAMES_INPUT_MSG.space);
            return false;
        }

        return true;
    },
];

const checkCarName = (names) => checkCarNameFunctions.every(names);
