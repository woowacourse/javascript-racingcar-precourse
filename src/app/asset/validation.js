import { CAR_NAMES_INPUT_MSG } from './constant.js';

const checkCarNameFunctions = [
    (carNames) => {
        if (carNames.every((carName) => carName.length < 1 || carName.length > 5)) {
            alert(CAR_NAMES_INPUT_MSG.length);
            return false;
        }

        return true;
    },
    (carNames) => {
        if (carNames.every((carName) => carName.length !== carName.replace(/\s/g, '').length)) {
            alert(CAR_NAMES_INPUT_MSG.space);
            return false;
        }

        return true;
    },
];

const checkCarName = (carNames) =>
    checkCarNameFunctions.every((checkCarNameFunction) => checkCarNameFunction(carNames));

export { checkCarName };
