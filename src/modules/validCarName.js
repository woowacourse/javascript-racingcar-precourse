import { TEXT } from "../constants/constants.js";

export const alertWrong = (message) => alert(message);

export const validLength = (carNames) => {
  const checkArr = carNames.map(name => name.length <= 5 ? true : false);
  
  return !checkArr.includes(false);
};

export const validDuplicate = (carNames) => {
  const set = new Set(carNames);

  return set.size == carNames.length;
};

export const warning = (carNames) => {
  const checkLength = validLength(carNames) ? true : alertWrong(TEXT.ALERT_IS_WRONG_LENGTH);
  const checkDuplicate = validDuplicate(carNames) ? true : alertWrong(TEXT.ALERT_IS_WRONG_DEPULICATE);

  return checkLength && checkDuplicate ? true : false;
};