import { ERR_MESSAGE, CONSTRAINTS } from './utils/constants.js';
import Validator from './utils/validator.js';

export const getNotValidMessage = carNames => {
  if (Validator.hasLessThanMin(carNames, CONSTRAINTS.MIN_CAR_NUMBER)) {
    return ERR_MESSAGE.LESS_INPUT;
  }

  if (Validator.isOverMaxLength(carNames, CONSTRAINTS.MAX_NAME_LENGTH)) {
    return ERR_MESSAGE.OVER_MAX_LENGTH;
  }

  if (Validator.hasEmptyStr(carNames)) {
    return ERR_MESSAGE.HAS_EMPTY_NAME;
  }

  if (Validator.isDuplicated(carNames)) {
    return ERR_MESSAGE.DUPLICATED_NAME;
  }

  return null;
};
