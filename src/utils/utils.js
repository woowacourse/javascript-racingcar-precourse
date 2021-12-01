const isUnique = (array) => array.length === new Set(array).size;

const isLengthValid = (array, min, max) =>
  array.every((str) => str.length >= min && str.length <= max);

const isValidCarNames = (carNameList) =>
  isUnique(carNameList) && isLengthValid(carNameList, 1, 5);

export default isValidCarNames;
