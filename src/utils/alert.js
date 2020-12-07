import {
  CAR_NAME_TOO_LONG_MESSAGE,
  CAR_NUMBER_NOT_ENOUGH_MESSGAE,
  SAME_CAR_NAME_MESSAGE,
  INVALID_TRY_COUNT_NUMBER_MESSAGE,
  INVALID_CAR_NAMES_MESSAGE,
  CAR_NAMES_NOT_SUBMITTED_MESSAGE,
} from '../constants/configuration.js';

export const makeInvalidCarNamesAlertMessage = (carNameCheckResult) => {
  let alertMessage = '';
  if (carNameCheckResult.isCarNumberEnough === false) {
    alertMessage += `${CAR_NUMBER_NOT_ENOUGH_MESSGAE}\n`;
  }
  if (carNameCheckResult.isCarNameNotLong === false) {
    alertMessage += `${CAR_NAME_TOO_LONG_MESSAGE}\n`;
  }
  if (carNameCheckResult.isAllCarNameDifferent === false) {
    alertMessage += `${SAME_CAR_NAME_MESSAGE}\n`;
  }

  return alertMessage;
};

export const makeNotEnoughConditionAlertMessage = (gamePlayCondition) => {
  let alertMessage = '';
  if (gamePlayCondition.isCarNamesSubmitted === false) {
    alertMessage += CAR_NAMES_NOT_SUBMITTED_MESSAGE;
    return alertMessage;
  }
  if (gamePlayCondition.isTryCountValid === false) {
    alertMessage += INVALID_TRY_COUNT_NUMBER_MESSAGE;
  }
  if (gamePlayCondition.isCarNamesValid === false) {
    alertMessage += INVALID_CAR_NAMES_MESSAGE;
  }

  return alertMessage;
};
