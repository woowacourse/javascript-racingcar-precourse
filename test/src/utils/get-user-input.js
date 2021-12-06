export function getCarNamesInput() {
  const carNamesInput = document.querySelector('#car-names-input');
  const carNamesInputValue = carNamesInput.value;

  return carNamesInputValue;
}

export function getRacingCountInput() {
  const racingCountInput = document.querySelector('#racing-count-input');
  const racingCountInputValue = racingCountInput.value;

  return racingCountInputValue;
}
