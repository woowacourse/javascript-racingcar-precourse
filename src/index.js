import carRacing from './carRacing.js';
import validateCarName from './validateCarName.js';
import validateUserCount from './validateUserCount.js';

export default function racingGame() {
  const carNameInput = document.querySelector('#car-names-input');
  const carNameSubmitBtn = document.querySelector('#car-names-submit');
  const racingCountSubmitBtn = document.querySelector('#racing-count-submit');
  const appBox = document.querySelector('#app');
  const resultBox = document.createElement('div');
  resultBox.setAttribute('id', 'racing-result-box');
  appBox.appendChild(resultBox);

  function printRacing(names, count) {
    if (names != undefined) {
      const carResult = carRacing(names, count);
      const racingResult = document.querySelector('#racing-result-box');
      racingResult.innerHTML = `${carResult}`;
    }
  }

  function submitCarName() {
    const carInput = carNameInput.value;
    const listValue = validateCarName(carInput);
    return listValue;
  }

  function submitCount() {
    const countInput = validateUserCount();
    return countInput;
  }
  carNameSubmitBtn.addEventListener('click', () => {
    validateCarName();
  });
  racingCountSubmitBtn.addEventListener('click', () => {
    const names = submitCarName();
    const count = submitCount();
    if (count != undefined) {
      printRacing(names, count);
    }
  });
}

new racingGame();
