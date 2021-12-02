import $ from './utils/utils.js';

export default function RacingCarGame() {
  const isOverFive = carInput => {
    carInput = carInput.split(',').map(car => car.trim());
    if (carInput.some(car => car.length > 5)) {
      return true;
    }
    return false;
  };

  const isDuplicate = carInput => {
    carInput = carInput.split(',').map(car => car.trim());
    if (carInput.length !== new Set(carInput).size) {
      return true;
    }
    return false;
  };

  const isValidCarInput = carInput => {
    if (carInput.length === 0 || isOverFive(carInput) || isDuplicate(carInput)) {
      return false;
    }
    return true;
  };

  const printCarError = carInput => {
    if (carInput.length === 0) {
      alert('빈값을 입력했습니다. 자동차 이름을 입력하세요.');
    } else if (isOverFive(carInput)) {
      alert('자동차 이름은 5글자를 초과할 수 없습니다.');
    } else if (isDuplicate(carInput)) {
      alert('중복된 이름이 있습니다.');
    }
  };

  const resetCarInput = () => {
    $('#car-names-input').value = '';
  };

  const isValidCountInput = countInput => {
    if (countInput === '' || Number(countInput) < 1) {
      return false;
    }
    return true;
  };

  const printCountError = countInput => {
    if (countInput === '') {
      alert('공백입니다. 숫자를 입력하세요.');
    } else if (Number(countInput) < 1) {
      alert('1이상의 수를 입력하세요.');
    }
  };

  const resetCountInput = () => {
    $('#racing-count-input').value = '';
  };

  $('#car-names-form').addEventListener('submit', e => {
    e.preventDefault();
    const carInput = $('#car-names-input').value;
    if (isValidCarInput(carInput)) {
      console.log('ok');
      return;
    }
    printCarError(carInput);
    resetCarInput();
  });

  $('#racing-count-form').addEventListener('submit', e => {
    e.preventDefault();
    const countInput = $('#racing-count-input').value;
    if (isValidCountInput(countInput)) {
      console.log('ok');
      return;
    }
    printCountError(countInput);
    resetCountInput();
  });
}

new RacingCarGame();
