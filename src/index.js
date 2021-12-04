import carRacing from './carRacing.js';
import validateCarName from './validateCarName.js';
import validateUserCount from './validateUserCount.js';

export default function racingGame() {
  const carNameInput = document.querySelector('#car-names-input');
  const carNameSubmitBtn = document.querySelector('#car-names-submit');
  const racingCountSubmitBtn = document.querySelector('#racing-count-submit');
  const resultBox = document.querySelector('#app');

  //Racing 출력 함수
  function printRacing(names, count) {
    if (names != undefined) {
      const carResult = carRacing(names, count);
      const racingResult = document.createElement('div');
      racingResult.innerHTML = `${carResult}`;
      resultBox.appendChild(racingResult);
    }
  }

  //car이름 배열로 리턴하는 함수
  function submitCarName() {
    const carInput = carNameInput.value;
    const listValue = validateCarName(carInput);
    return listValue;
  }
  //User가 입력한 숫자 리턴하는 함수
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
