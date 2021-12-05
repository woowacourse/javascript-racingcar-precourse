import { COUNT, ERROR } from '../utils/constants.js';

export const alertCarInputError = ERROR_MSG => {
  alert(ERROR_MSG);
};

export const alertCountInputError = countInput => {
  if (countInput === '') {
    alert(ERROR.INPUT_BLANK);
  } else if (Number(countInput) < COUNT.MIN_NUM) {
    alert(ERROR.UNDER_MIN_NUM);
  }
};
