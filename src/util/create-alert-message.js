import {
  isDuplicatedCarName,
  hasEmpty,
  hasSpace,
  isInvalidCarNameLength,
  isUnderZero,
} from "./check-valid.js";

import { ALERT_MESSAGE } from "./constant.js";

export const createCarNameAlertMessage = (carNames) => {
  if (isDuplicatedCarName(carNames)) {
    return ALERT_MESSAGE.DUPLICATED_NAME;
  }
  if (hasEmpty(carNames)) {
    return ALERT_MESSAGE.NO_EMPTY_NAME;
  }
  if (isInvalidCarNameLength(carNames)) {
    return ALERT_MESSAGE.NOT_OVER_FIVE_NAME;
  }
  if (hasSpace(carNames)) {
    return ALERT_MESSAGE.NO_SPACE_IN_NAME;
  }

  return "";
};

export const createRacingCountAlertMessage = (racingCount) => {
  if (isUnderZero(racingCount)) {
    return ALERT_MESSAGE.OVER_ZERO;
  }

  return "";
};
