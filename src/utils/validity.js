import { CAR_NAME_MAX_LENGTH, USER_INPUT_ALERT } from '../libs/constant.js';

export const CountInputCheckMethods = [
  (value) => {
    if (value === '' || Number(value) < 1 || parseInt(value) !== Number(value)) {
      alert(USER_INPUT_ALERT.notNaturalNumberError);
      return false;
    }
    return true;
  },
];

export const CarNamesInputCheckMethods = [
  (value) => {
    if (value.length > CAR_NAME_MAX_LENGTH) {
      alert(USER_INPUT_ALERT.lengthError);
      return false;
    }
    return true;
  },
];
