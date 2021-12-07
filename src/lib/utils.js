import { FORWARD_CHECK_NUMBER, RANGE, WHITESPACE } from './constants.js';

export const hasSomeStringIncludeSpace = (namesArray) => {
  return namesArray.some((name) => name.includes(WHITESPACE));
};
export const hasSomeStringLengthGreaterThanFive = (namesArray) => {
  return namesArray.some((name) => name.length > FORWARD_CHECK_NUMBER);
};
export const hasStringDuplicated = (namesArray) => {
  return new Set(namesArray).size !== namesArray.length;
};
export const isNumberLessThanZero = (number) => {
  return number <= 0;
};
export const getRandomNumber = () => {
  return window.MissionUtils.Random.pickNumberInRange(RANGE.MIN, RANGE.MAX);
};
export const generateFormHandler = ({ e, executor }) => {
  e.preventDefault();

  const [{ value: stringNumber }] = e.target;

  executor(stringNumber);
};
