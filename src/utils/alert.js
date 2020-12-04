import {
  CAR_NAME_TOO_LONG_MESSAGE,
  CAR_NUMBER_NOT_ENOUGH_MESSGAE,
  SAME_CAR_NAME_MESSAGE,
} from '../constants/configuration.js';

export const makeAlertMessage = ({
  isCarNumberEnough,
  isCarNameNotLong,
  isAllCarNameDifferent,
}) => {
  let alertMessage = '';
  if (isCarNumberEnough === false) {
    alertMessage += `${CAR_NUMBER_NOT_ENOUGH_MESSGAE}\n`;
  }
  if (isCarNameNotLong === false) {
    alertMessage += `${CAR_NAME_TOO_LONG_MESSAGE}\n`;
  }
  if (isAllCarNameDifferent === false) {
    alertMessage += `${SAME_CAR_NAME_MESSAGE}\n`;
  }

  return alertMessage;
};
