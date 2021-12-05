import { COUNT, ERROR } from '../utils/constants.js';

const alertCountInputError = countInput => {
  if (countInput === '') {
    alert(ERROR.INPUT_BLANK);
  } else if (Number(countInput) < COUNT.MIN_NUM) {
    alert(ERROR.UNDER_MIN_NUM);
  }
};

export default alertCountInputError;
