import { checkFloatType, checkUnderOne } from "./countValidation.js";
import {
  checkDuplicateName,
  checkEmptyName,
  checkOverFive,
  checkSingle,
} from "./nameVlidation.js";

const splitByComma = (names) => names.split(",");

const checkEmptyInput = (value) => (value.length === 0 ? true : false);

const retypeInput = (inputTag, message) => {
  inputTag.value = "";
  alert(message);
  inputTag.focus();
};

const checkNamesInput = (checkList, namesInput) => {
  const {
    isEmptyInput,
    isEmptyName,
    isSingle,
    isOverFive,
    isDuplicate,
  } = checkList;

  if (isEmptyInput) {
    retypeInput(namesInput, "빈 입력은 허용되지 않습니다.");
  } else if (isEmptyName) {
    retypeInput(namesInput, "공백 이름은 허용되지 않습니다.");
  } else if (isSingle) {
    retypeInput(namesInput, "둘 이상의 자동차 이름을 입력해주세요. ");
  } else if (isOverFive) {
    retypeInput(namesInput, "5자 이하의 자동차 이름을 입력해주세요.");
  } else if (isDuplicate) {
    retypeInput(namesInput, "중복된 이름은 허용되지 않습니다.");
  } else {
    return true;
  }
};

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
};
