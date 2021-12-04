import { USER_INPUT_ALERT } from '../libs/constant.js';

export const CountInputCheckMethods = [
  (value) => {
    if (value === '' || Number(value) < 1 || parseInt(value) !== Number(value)) {
      alert(USER_INPUT_ALERT.notNaturalNumber);
      return false;
    }
    return true;
  },
];
