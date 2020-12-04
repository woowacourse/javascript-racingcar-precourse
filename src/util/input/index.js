import {
  checkDuplicateName,
  checkEmptyName,
  checkOverFive,
  checkSingle,
} from "./nameVlidation.js";

const splitByComma = (names) => names.split(",");

const checkEmptyInput = (value) => (value.length === 0 ? true : false);

export const namesValidation = (names) => {
  const namesArray = splitByComma(names);

  const isEmptyInput = checkEmptyInput(names);
  const isEmptyName = checkEmptyName(namesArray);
  const isSingle = checkSingle(namesArray);
  const isOverFive = checkOverFive(namesArray);
  const isDuplicate = checkDuplicateName(namesArray);
};
