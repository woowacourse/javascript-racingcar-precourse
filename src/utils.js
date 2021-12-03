import Car from './Car.js';

export const $ = selector => document.querySelector(selector);

export const isBlank = string => {
  return string.length === 0;
};

export const isIncludeSpace = string => {
  return /\s/g.test(string);
};

export const splitUsingComma = string => {
  return string.split(',');
};

export const isDuplicated = array => {
  const set = new Set(array);
  return array.length !== set.size;
};

export const isOverFiveLetters = array => {
  return array.some(string => string.length > 5);
};

export const generateCars = string => {
  return splitUsingComma(string).map(name => new Car(name));
};

export const isNumber = string => {
  return /^[^0-9]$/g.test(string);
};
