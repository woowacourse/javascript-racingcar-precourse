import { retypeInput } from "./index.js";

export const checkUnderOne = (count) => (parseInt(count) < 1 ? true : false);

export const checkFloatType = (count) => (count.includes(".") ? true : false);

export const checkCountInput = (checkList, countInput) => {
  const { isEmptyInput, isFloatType, isUnderOne } = checkList;

  if (isEmptyInput) {
    retypeInput(countInput, "빈 입력은 허용되지 않습니다.");
  } else if (isFloatType) {
    retypeInput(countInput, "소수점은 허용되지 않습니다.");
  } else if (isUnderOne) {
    retypeInput(countInput, "1이상의 숫자를 입력해주세요 ");
  } else {
    return true;
  }
};
