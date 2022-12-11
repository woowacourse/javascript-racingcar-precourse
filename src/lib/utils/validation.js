const CustomError = require('../../CustomError');
const { MESSAGE } = require('../constants/error');
const { nameFormatter } = require('./formatter');

const isValidLength = (name) => name.length > 0 && name.length <= 5;
const isValidMinLength = (inputArray) => inputArray.length > 1;
const carNameValidation = (input) => {
  const inputArray = nameFormatter(input);
  const result = inputArray.every(isValidLength);
  if (!isValidMinLength(inputArray)) throw new CustomError(MESSAGE.name_unit);
  if (!result) throw new CustomError(MESSAGE.name_range);
};

const isNumber = (input) => {
  const inputNumber = Math.floor(Number(input));
  return String(inputNumber) === input && inputNumber >= 0;
};

const isZero = (input) => !Number(input);

const countValidation = (input) => {
  if (!isNumber(input)) throw new CustomError(MESSAGE.count_number);
  if (isZero(input)) throw new CustomError(MESSAGE.count_zero);
};

module.exports = {
  carNameValidation,
  countValidation,
};
