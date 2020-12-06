import { isUnderFive, hasEmptyItem, isEmpty, isNegative } from "./utils.js";

export const validateCar = (input) => {
  let isValidate = true;
  if (!isUnderFive(input)) isValidate = false;
  if (hasEmptyItem(input)) isValidate = false;

  return isValidate;
};

export const validateCount = (input) => {
  let isValidate = true;
  if (isEmpty(input)) isValidate = false;
  if (isNegative(input)) isValidate = false;

  return isValidate;
};
