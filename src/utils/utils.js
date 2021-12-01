const isUnique = (array) => array.length === new Set(array).size;

const isLengthValid = (array, min, max) =>
  array.every((str) => str.length >= min && str.length <= max);

export const isValidCarNames = (carNameList) =>
  isUnique(carNameList) && isLengthValid(carNameList, 1, 5);

const isRangeValid = (number, min, max) => number >= min && number <= max;

export const isRacingCountValid = (racingCount) => {
  return (
    Number.isInteger(racingCount) &&
    isRangeValid(racingCount, 1, Number.MAX_SAFE_INTEGER)
  );
};
