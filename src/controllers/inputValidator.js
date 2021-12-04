import { CAR_NAME_MAX_LENGTH, RACING_COUNT_RANGE } from '../constants/index.js';
import {
  EMPTY_INPUT,
  INPUT_CAR_NAMES_BAD_LENGTH,
  INPUT_CAR_NAMES_HAS_DUPLICATES,
  INPUT_RACING_COUNT_VALID_NUMBER,
} from '../utils/errorHandler.js';
import Validator from '../utils/validator.js';

/* 공통 */
const rejectEmptyInput = (input) => {
  if (!input?.length) {
    return Validator.rejectWith(EMPTY_INPUT);
  }

  return Validator.success();
};

/* Car Names Validation */
const successIfEveryCarNameIsValidLength = (input) => {
  const carNames = input.split(',');
  const isCarNameValidLength = (carName) =>
    carName.length > 0 && carName.length <= CAR_NAME_MAX_LENGTH;

  if (carNames.every(isCarNameValidLength)) {
    return Validator.success();
  }

  return Validator.rejectWith(INPUT_CAR_NAMES_BAD_LENGTH);
};

const rejectDuplicateCarName = (input) => {
  const carNames = input.split(',');
  const hasDuplicateCarName = carNames.length !== new Set(carNames).size;

  if (hasDuplicateCarName) {
    return Validator.rejectWith(INPUT_CAR_NAMES_HAS_DUPLICATES);
  }

  return Validator.success();
};

/* Racing Count Validation */
const successIfRacingCountInValidRange = (input) => {
  const racingCount = Number(input);
  const isValidRacingCount =
    Number.isInteger(racingCount) &&
    racingCount >= RACING_COUNT_RANGE.min &&
    racingCount <= RACING_COUNT_RANGE.max;

  if (isValidRacingCount) {
    return Validator.success();
  }

  return Validator.rejectWith(INPUT_RACING_COUNT_VALID_NUMBER);
};

/* Export Validator */
export const carNamesInputValidator = new Validator([
  rejectEmptyInput,
  successIfEveryCarNameIsValidLength,
  rejectDuplicateCarName,
]);

export const racingCountInputValidator = new Validator([
  rejectEmptyInput,
  successIfRacingCountInValidRange,
]);
