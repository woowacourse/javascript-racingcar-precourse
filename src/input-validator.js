export function isValidCarName(carNames) {
  const carNameArray = carNames.split(",");
  let isValid = false;

  for (let i = 0; i < carNameArray.length; i++) {
    if (carNameArray[i].length === 0) {
      alert(RETURN_MESSAGES.ERROR_NAME_INPUT_NONE);
    } else if (carNameArray[i].length > 5) {
      alert(RETURN_MESSAGES.ERROR_NAME_LENGTH_EXCEEDED);
    } else {
      isValid = true;

      return isValid;
    }
  }
}

export function isValidRacingCount(racingCount) {
  let isValid = false;

  if (racingCount < 1) {
    alert(RETURN_MESSAGES.ERROR_RACING_COUNT_NEGATIVE);
  } else {
    isValid = true;

    return isValid;
  }
}
