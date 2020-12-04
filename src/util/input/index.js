import {
  checkCountInput,
  checkFloatType,
  checkUnderOne,
} from "./countValidation.js";
import {
  checkDuplicateName,
  checkEmptyName,
  checkNamesInput,
  checkOverFive,
  checkSingle,
} from "./nameVlidation.js";

export const retypeInput = (inputTag, message) => {
  inputTag.value = "";
  alert(message);
  inputTag.focus();
};

const splitByComma = (names) => names.split(",");

const checkEmptyInput = (value) => (value.length === 0 ? true : false);

export const namesValidation = (names, namesInput) => {
  const namesArray = splitByComma(names);

  const isEmptyInput = checkEmptyInput(names);
  const isEmptyName = checkEmptyName(namesArray);
  const isSingle = checkSingle(namesArray);
  const isOverFive = checkOverFive(namesArray);
  const isDuplicate = checkDuplicateName(namesArray);
  const checkList = {
    isEmptyInput,
    isEmptyName,
    isSingle,
    isOverFive,
    isDuplicate,
  };

  return checkNamesInput(checkList, namesInput);
};

export const countValidation = (count, countInput) => {
  const isEmptyInput = checkEmptyInput(count);
  const isFloatType = checkFloatType(count);
  const isUnderOne = checkUnderOne(count);
  const checkList = { isEmptyInput, isFloatType, isUnderOne };

  return checkCountInput(checkList, countInput);
};
