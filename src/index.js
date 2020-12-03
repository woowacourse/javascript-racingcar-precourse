function isValidCarNames(carNames) {
  const MAX_CAR_NAME_LENGTH = 5;
  const isLValidCarNameLength = carNames.every(
    name => name.length > 0 && name.length <= MAX_CAR_NAME_LENGTH
  );
  const isMoreThanTwoCars = carNames.length > 1;

  if (isLValidCarNameLength && isMoreThanTwoCars) {
    return true;
  }

  return false;
}


