const { nameFormatter } = require('./formatter');

const isValidLength = (name) => name.length > 0 && name.length <= 5;
const isValidMinLength = (inputArray) => inputArray.length > 1;
const carNameValidation = (input) => {
  const inputArray = nameFormatter(input);
  const result = inputArray.every(isValidLength);
  if (!isValidMinLength(inputArray)) throw new Error('[ERROR] 자동차 이름은 쉼표로 구분해주세요.');
  if (!result) throw new Error('[ERROR] 자동차 이름은 최소 1글자 이상 최대 5글자 이하로 작성해주세요.');
};

const isNumber = (input) => {
  const inputNumber = Math.floor(Number(input));
  return String(inputNumber) === input && inputNumber >= 0;
};

const countValidation = (input) => {
  if (!isNumber(input)) throw new Error('[ERROR] 숫자를 입력해주세요.');
};

module.exports = {
  carNameValidation,
  countValidation,
};
