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

export function clearCarNamesInput() {
  const carNamesInput = document.querySelector('#car-names-input');

  carNamesInput.value = '';
}

export function clearRacingCountInput() {
  const racingCountInput = document.querySelector('#racing-count-input');

  racingCountInput.value = '';
}

export const carNamesDisabled = function () {
  const carNamesButton = document.querySelector('#car-names-submit');
  const carNamesInput = document.querySelector('#car-names-input');

  carNamesInput.disabled = true;
  carNamesButton.disabled = true;
};

export const racingCountDisabled = function () {
  const racingCountButton = document.querySelector('#racing-count-submit');
  const racingCountInput = document.querySelector('#racing-count-input');

  racingCountButton.disabled = true;
  racingCountInput.disabled = true;
};
