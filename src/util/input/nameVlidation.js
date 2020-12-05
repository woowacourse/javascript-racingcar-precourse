import { retypeInput } from "./index.js";

export const checkEmptyName = (namesArray) => {
  const isEmpty = namesArray.map((name) =>
    name.trim().length === 0 ? true : false
  );

  if (isEmpty.includes(true)) {
    return true;
  }
};

export const checkOverFive = (namesArray) => {
  const NUMBER = 5;

  const isOverFive = namesArray.map((name) =>
    name.length > NUMBER ? true : false
  );

  if (isOverFive.includes(true)) {
    return true;
  }
};

export const checkDuplicateName = (namesArray) => {
  const namesSet = new Set(namesArray);

  if (namesSet.size !== namesArray.length) {
    return true;
  }
};

export const checkSingle = (namesArray) =>
  namesArray.length < 2 ? true : false;

export const checkNamesInput = (checkList, namesInput) => {
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
