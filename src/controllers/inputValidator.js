import { CAR_NAME_MAX_LENGTH, RACING_COUNT_RANGE } from '../constants/index.js';
import {
  EMPTY_INPUT,
  INPUT_CAR_NAMES_BAD_LENGTH,
  INPUT_CAR_NAMES_HAS_DUPLICATES,
  INPUT_RACING_COUNT_VALID_NUMBER,
} from '../utils/errorHandler.js';
import Validator from '../utils/validator.js';
import { parseCars, parseRacingCount } from './inputParser.js';

/* 공통 */
const rejectEmptyInput = (input) => {
  if (!input?.length) {
    return Validator.rejectWith(EMPTY_INPUT);
  }

  return Validator.success();
};

/* Car Names Validation */
const successIfEveryCarNameIsValidLength = (input) => {
  const cars = parseCars(input);
  const isCarNameValidLength = (car) =>
    car.name.length > 0 && car.name.length <= CAR_NAME_MAX_LENGTH;

  if (cars.every(isCarNameValidLength)) {
    return Validator.success();
  }

  return Validator.rejectWith(INPUT_CAR_NAMES_BAD_LENGTH);
};

const rejectDuplicateCarName = (input) => {
  const cars = parseCars(input);
  const carNames = cars.map((car) => car.name);
  const hasDuplicateCarName = carNames.length !== new Set(carNames).size;

  if (hasDuplicateCarName) {
    return Validator.rejectWith(INPUT_CAR_NAMES_HAS_DUPLICATES);
  }

  return Validator.success();
};

/* Racing Count Validation */
const successIfRacingCountInValidRange = (input) => {
  const racingCount = parseRacingCount(input);
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
