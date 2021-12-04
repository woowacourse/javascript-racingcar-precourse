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

export function isCountInputValid(value) {
  return CountInputCheckMethods.every((CountInputCheckMethod) => CountInputCheckMethod(value));
}

export const CarNamesInputCheckMethods = [
  (value) => {
    if (value.length > CAR_NAME_MAX_LENGTH) {
      alert(USER_INPUT_ALERT.lengthError);
      return false;
    }
    return true;
  },
];

export function isCarNamesInputValid(carNamesArray) {
  return carNamesArray.every((carName) =>
    CarNamesInputCheckMethods.every((CarNamesInputCheckMethod) =>
      CarNamesInputCheckMethod(carName),
    ),
  );
}
