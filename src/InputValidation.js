function checkCarNamesLengthValid(carNames) {
  return carNames.map((elem) => elem.length <= 5);
}

export function checkCarNamesInputValid(carNames) {
  const carNamesValidation = checkCarNamesLengthValid(carNames);

  return !carNamesValidation.includes(false);
}

function checkRacingCountNumber(racingCount) {
  return racingCount;
}

function checkRacingCountInteger(racingCount) {
  return Number.isInteger(racingCount * 1);
}

function checkRacingCountPositive(racingCount) {
  return Math.sign(racingCount) === 1;
}

export function checkRacingCountInputValid(racingCount) {
  return (
    checkRacingCountNumber(racingCount)
    && checkRacingCountInteger(racingCount)
    && checkRacingCountPositive(racingCount)
  );
}
