export const trimStringSpace = function (inputString) {
  const SPACE_REGEX = / /g;
  const trimmedString = inputString.replace(SPACE_REGEX, "");

  return trimmedString;
};

export const convertStringToArray = function (inputString) {
  const inputArray = inputString.split(",");

  return inputArray;
};

export const convertStringToNumber = function (string) {
  return Number(string);
};

export const generateRandomNumber = function () {
  const randomNumber = Math.floor(Math.random() * 10); // 0~9

  return randomNumber;
};
