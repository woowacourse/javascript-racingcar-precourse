import $ from './utils/utils.js';
import getRandomNumber from './utils/getRandomNumber.js';

function Car(name) {
  this.name = name;
  this.move = 0;
}

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

  const renderCountForm = () => {
    $('#racing-count-title').className = 'visible';
    $('#racing-count-form').className = 'visible';
  };

  $('#car-names-form').addEventListener('submit', e => {
    e.preventDefault();
    const carInput = $('#car-names-input').value;
    if (isValidCarInput(carInput)) {
      renderCountForm();
      return;
    }
    printCarError(carInput);
    resetCarInput();
  });

  $('#racing-count-form').addEventListener('submit', e => {
    e.preventDefault();
    const countInput = $('#racing-count-input').value;
    if (isValidCountInput(countInput)) {
      renderResult(getCarArr());
      return;
    }
    printCountError(countInput);
    resetCountInput();
  });

  // 3. 자동차 전진 or 정지

  const renderResult = carArr => {
    const resultDiv = document.createElement('div');
    resultDiv.setAttribute('id', 'result-wrapper');

    $('#app').appendChild(resultDiv);

    let countInput = Number($('#racing-count-input').value);
    while (countInput) {
      printGameProcess(calculateRandomNum(carArr));
      countInput -= 1;
    }
    printWinner(carArr);
  };

  const printWinner = carArr => {
    const winners = getWinner(carArr);

    const span = document.createElement('span');
    span.innerText = `최종 우승자: ${winners.join(', ')}`;
    span.setAttribute('id', 'racing-winners');
    $('#result-wrapper').appendChild(span);
  };

  const getWinner = carArr => {
    carArr = carArr.sort((a, b) => b.move - a.move);
    const winnerMove = carArr[0].move;
    const winners = [];
    carArr.forEach(car => {
      if (car.move === winnerMove) winners.push(car.name);
    });
    return winners;
  };

  const printGameProcess = objArr => {
    objArr.forEach(car => {
      $('#result-wrapper').insertAdjacentHTML('beforeend', `${car.name}: ${car.move ? '-'.repeat(car.move) : ''} <br>`);
    });
    $('#result-wrapper').insertAdjacentHTML('beforeend', `<br>`);
  };

  const getCarArr = () => {
    const carInput = $('#car-names-input')
      .value.split(',')
      .map(car => car.trim());

    const cars = [];
    carInput.forEach(car => {
      cars.push(new Car(car));
    });
    return cars;
  };

  const calculateRandomNum = carArr => {
    carArr.forEach(car => {
      const randomNum = getRandomNumber();
      if (randomNum >= 4) car.move += 1;
    });
    return carArr;
  };
}

new RacingCarGame();
