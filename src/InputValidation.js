function checkCarNamesLengthValid(carNames) {
  return carNames.map((elem) => elem.length <= 5);
}

export default function checkCarNamesInputValid(carNames) {
  const carNamesValidation = checkCarNamesLengthValid(carNames);

  return !carNamesValidation.includes(false);
}
