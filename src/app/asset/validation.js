// import { CAR_NAMES_INPUT_MSG } from './constant.js';
// const CAR_NAMES_INPUT_MSG = require('./constant');

const checkCarNameFunctions = [
    (carNames) => {
        if (carNames.some((carName) => carName.length < 1 || carName.length > 5)) {
            // alert(CAR_NAMES_INPUT_MSG.length);
            return false;
        }

        return true;
    },
    (carNames) => {
        if (carNames.some((carName) => carName.length !== carName.replace(/\s/g, '').length)) {
            // alert(CAR_NAMES_INPUT_MSG.space);
            return false;
        }

        return true;
    },
];

const checkCarName = (carNames) =>
    checkCarNameFunctions.every((checkCarNameFunction) => checkCarNameFunction(carNames));

const checkRacingCntFunctions = [
    (racingCnt) => {
        if (racingCnt === '') {
            return false;
        }

        return true;
    },
    (racingCnt) => {
        if (!Number(racingCnt)) {
            return false;
        }

        return true;
    },
    (racingCnt) => {
        if (racingCnt <= 0) {
            return false;
        }

        return true;
    },
];

module.exports = {
    checkCarName,
    checkRacingCntFunctions,
};

// export { checkCarName };
