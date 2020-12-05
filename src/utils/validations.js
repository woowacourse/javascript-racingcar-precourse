import { NUM } from "./constants.js";

export const isValidCarNames = nameList => {
  return nameList.every(name => name.length <= NUM.NAME_LIMIT);
};

export const isEmptyInput = nameList => !nameList.length;

export const isPositiveNumber = num => parseInt(num) > 0;
