function checkCarNamesLengthValid(carNames) {
  return carNames.map((elem) => elem.length > 0 && elem.length <= 5);
}

function checkCarNamesNotDuplicate(carNames) {
  return carNames.length === new Set(carNames).size;
}

export function checkCarNamesInputValid(carNames) {
  const carNamesValidation = checkCarNamesLengthValid(carNames);

  return (
    !carNamesValidation.includes(false) && checkCarNamesNotDuplicate(carNames)
  );
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
