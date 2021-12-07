import { ALERT_MESSAGE, NUMBER_RULE } from './constants';

export default {
  checkValidCarName(carNamesInput) {
    const splittedCarNames = carNamesInput.split(',');
    if (!carNamesInput.length) {
      alert(ALERT_MESSAGE.CAR_INPUT_NOT_EXIT);
      return false;
    }
    if (!isValidCarNamesLength(splittedCarNames)) {
      alert(ALERT_MESSAGE.WRONG_COUNT_NUMBER);
      return false;
    }
    if (!isDuplicatedCarNames(splittedCarNames)) {
      alert(ALERT_MESSAGE.DUPLICATED_CAR_NAME);
      return false;
    }
    return true;
  },
  checkValidRacingCount(count) {
    if (!isPositiveNumber(count)) {
      alert(ALERT_MESSAGE.WRONG_COUNT_NUMBER);
      return false;
    }
    if (!isCarExist()) {
      alert(ALERT_MESSAGE.CAR_NOT_EXIT);
      return false;
    }
    return true;
  },
};
const isPositiveNumber = (number) => number > 0;
const isValidCarNamesLength = (carNamesArray) =>
  carNamesArray.every(
    (carName) => carName.length <= NUMBER_RULE.MAX_CAR_NAME_LENGTH,
  );
const isDuplicatedCarNames = (carNames) =>
  carNames.length !== new Set(carNames).size;
const isCarExist = () => CarsModel.getCars().length;
