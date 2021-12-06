import Car from '../model/Car.js';
import { NUMBER, REGEX, CHAR } from './constants.js';

export const $ = selector => document.querySelector(selector);

export const isBlank = string => {
  return string.length === NUMBER.ZERO;
};

export const isIncludeSpace = string => {
  return REGEX.IS_INCLUDE_SPACE.test(string);
};

export const splitUsingComma = string => {
  return string.split(CHAR.COMMA);
};

export const isDuplicated = array => {
  const set = new Set(array);
  return array.length !== set.size;
};

export const isOverFiveLetters = array => {
  return array.some(string => string.length > NUMBER.FIVE_LETTERS);
};

export const hasEmptyElement = array => {
  return array.some(string => isBlank(string));
};

export const generateCars = string => {
  return splitUsingComma(string).map(name => new Car(name));
};

export const isZero = string => {
  return Number(string) === NUMBER.ZERO;
};

export const hasSpecial = string => {
  return string.split(CHAR.EMPTY).some(char => REGEX.HAS_SPECIAL.test(char));
};

export const makeHyphenGraph = number => {
  let result = CHAR.EMPTY;
  Array.from({ length: number }, () => (result += CHAR.HYPHEN));

  return result;
};

export const getWinners = array => {
  const maxValue = Math.max(...array.map(object => object.location));

  return array
    .filter(object => object.location === maxValue)
    .map(object => object.name)
    .join(CHAR.COMMA_WITH_SPACE);
};
