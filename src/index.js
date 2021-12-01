import $ from './utils/utils.js';

export default function RacingCarGame() {
  const isOverFive = userInput => {
    userInput = userInput.split(',').map(car => car.trim());
    if (userInput.some(car => car.length > 5)) {
      return true;
    }
    return false;
  };

  const isDuplicate = userInput => {
    userInput = userInput.split(',').map(car => car.trim());
    if (userInput.length !== new Set(userInput).size) {
      return true;
    }
    return false;
  };

  const isValidInput = userInput => {
    if (userInput.length === 0 || isOverFive(userInput) || isDuplicate(userInput)) {
      return false;
    }
    return true;
  };

  const printError = userInput => {
    if (userInput.length === 0) {
      alert('빈값을 입력했습니다. 자동차 이름을 입력하세요.');
    } else if (isOverFive(userInput)) {
      alert('자동차 이름은 5글자를 초과할 수 없습니다.');
    } else if (isDuplicate(userInput)) {
      alert('중복된 이름이 있습니다.');
    }
  };

  const resetCarInput = () => {
    $('#car-names-input').value = '';
  };

  $('#car-names-form').addEventListener('submit', e => {
    e.preventDefault();
    const userInput = $('#car-names-input').value;
    if (isValidInput(userInput)) {
      console.log('ok!');
      return;
    }
    printError(userInput);
    resetCarInput();
  });
}

new RacingCarGame();
