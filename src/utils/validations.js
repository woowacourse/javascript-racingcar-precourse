import {
  NUMBER_OF_CAR_NAMES_MIN,
  NUMBER_OF_CAR_NAMES_MAX,
  RACING_COUNT_RANGE_MIN,
  RACING_COUNT_RANGE_MAX,
} from '../config/config.js';

const isUnique = (array) => array.length === new Set(array).size;

const isLengthValid = (array, min, max) =>
  array.every((str) => str.length >= min && str.length <= max);

export const isValidCarNames = (carNameList) =>
  isUnique(carNameList) &&
  isLengthValid(carNameList, NUMBER_OF_CAR_NAMES_MIN, NUMBER_OF_CAR_NAMES_MAX);

const isRangeValid = (number, min, max) => number >= min && number <= max;

export const isRacingCountValid = (racingCount) => {
  return (
    Number.isInteger(racingCount) &&
    isRangeValid(racingCount, RACING_COUNT_RANGE_MIN, RACING_COUNT_RANGE_MAX)
  );
};
