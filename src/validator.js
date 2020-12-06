import { isUnderFive, hasEmptyItem } from "./utils.js";

export const validateCar = (input) => {
  let isValidate = true;
  if (!isUnderFive(input)) isValidate = false;
  if (hasEmptyItem(input)) isValidate = false;

  return isValidate;
};
