import { CAR_NAMES_INPUT_MSG, RACING_CNT_INPUT_MSG } from './constant.js';

const checkCarNameFunctions = [
    (carNames) => {
        if (carNames.some((carName) => carName.length < 1 || carName.length > 5)) {
            alert(CAR_NAMES_INPUT_MSG.length);
            return false;
        }

        return true;
    },
    (carNames) => {
        if (carNames.some((carName) => carName.length !== carName.replace(/\s/g, '').length)) {
            alert(CAR_NAMES_INPUT_MSG.space);
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
            alert(RACING_CNT_INPUT_MSG.require);
            return false;
        }

        return true;
    },
    (racingCnt) => {
        if (!Number(racingCnt)) {
            alert(RACING_CNT_INPUT_MSG.naturalNum);
            return false;
        }

        return true;
    },
    (racingCnt) => {
        if (racingCnt <= 0) {
            alert(RACING_CNT_INPUT_MSG.naturalNum);
            return false;
        }

        return true;
    },
];

const checkRacingCnt = (racingCnt) =>
    checkRacingCntFunctions.every((checkRacingCntFunction) => checkRacingCntFunction(racingCnt));

export { checkCarName, checkRacingCnt };
