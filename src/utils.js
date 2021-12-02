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
