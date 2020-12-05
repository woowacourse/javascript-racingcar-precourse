export default function RacingCarGame() {
  const inputElements = document.querySelectorAll('.car-game-container input');
  const submitButtons = document.querySelectorAll('.car-game-container button');
  const racingCountHeader = document.querySelector('.car-game-container h4');
  const gameResultHeader = document.querySelector('#app h4:last-child');
  let carNamesInputElement = inputElements[0];
  let carNamesSubmitButton = submitButtons[0];
  let racingCountInputElement = inputElements[1];
  let racingCountSubmitButton = submitButtons[1];

  carNamesInputElement.id = 'car-names-input';
  carNamesSubmitButton.id = 'car-names-submit';
  racingCountInputElement.id = 'racing-count-input';
  racingCountSubmitButton.id = 'racing-count-submit';
  racingCountHeader.id = 'racing-count-header';
  gameResultHeader.id = 'game-result-header';

  racingCountInputElement.style.display = 'none';
  racingCountSubmitButton.style.display = 'none';
  racingCountHeader.style.display = 'none';
  gameResultHeader.style.display = 'none';
  carNamesSubmitButton.addEventListener('click', handleCarNames);
}

const handleCarNames = () => {
  const separator = ',';
  const carNamesInputElement = document.querySelector('#car-names-input');
  const carNames = carNamesInputElement.value.split(separator);
  const error = isErrorCarNames(carNames);

  if (error) {
    return requestInputAgain(error, carNamesInputElement);
  }

  let cars = createCars(carNames);
  showRacingCountTags(cars);
};

const isErrorCarNames = (carNames) => {
  if (carNames === '') {
    return 'nameEmpty';
  }
  if (carNames.length <= 1) {
    return 'nameOnlyOne';
  }
  if (carNames.length !== new Set(carNames).size) {
    return 'nameRedundant';
  }
  for (let name of carNames) {
    if (name.length < 1) {
      return 'nameTooShort';
    }
    if (name.length > 5) {
      return 'nameTooLong';
    }
    if (name.replace(' ', '').length < 1) {
      return 'nameOnlySpace';
    }
  }
  return false;
};

const requestInputAgain = (error, element) => {
  const messages = {
    nameEmpty: `\n🚨 안내 🚨\n\n 아무것도 입력되지 않았습니다.\n 게임 진행을 위해 자동차 이름을 입력해 주세요.`,
    nameOnlyOne: `\n🚨 안내 🚨\n\n 하나의 자동차 이름만 입력되었습니다.\n 경주를 위해 둘 이상의 자동차 이름을 입력해 주세요.`,
    nameRedundant: `\n🚨 안내 🚨\n\n 자동차의 이름이 서로 중복됩니다.\n 서로 다른 자동차 이름을 입력해 주세요.`,
    nameTooShort: `\n🚨 안내 🚨\n\n 콤마 뒤에 자동차이름이 입력되지 않았습니다.\n 자동차 이름을 콤마로 구분해서 입력해 주세요.`,
    nameTooLong: `\n🚨 안내 🚨\n\n 자동차의 이름이 너무 깁니다.\n 5자 이하의 자동차 이름을 입력해 주세요.`,
    nameOnlySpace: `\n🚨 안내 🚨\n\n 공백만으로는 이름이 될 수 없습니다.\n 구분 가능한 자동차 이름을 입력해 주세요.`,
    countEmpty: `\n🚨 안내 🚨\n\n 유효한 숫자가 입력되지 않았습니다.\n 게임 진행을 위해 시도횟수를 입력해 주세요.`,
    countNotInteger: `\n🚨 안내 🚨\n\n 소수가 입력되었습니다\n 시도횟수를 정수로 입력해 주세요.`,
    countTooSmall: `\n🚨 안내 🚨\n\n 0 이하의 값이 입력되었습니다.\n 시도횟수를 양수로 입력해 주세요.`,
  };

  alert(messages[error]);
  element.value = '';
  element.focus();
};

const createCars = (carNames) => {
  let cars = [];
  for (let name of carNames) {
    cars.push(new Car(name));
  }
  return cars;
};

class Car {
  constructor(name) {
    this.name = name;
    this.score = '';
  }
}

const showRacingCountTags = (cars) => {
  const racingCountInputElement = document.querySelector('#racing-count-input');
  const racingCountSubmitButton = document.querySelector(
    '#racing-count-submit'
  );

  displayElement('#racing-count-header', 'block');
  displayElement('#racing-count-input', 'inline-block');
  displayElement('#racing-count-submit', 'inline-block');

  racingCountInputElement.focus();
  racingCountSubmitButton.cars = cars;
  racingCountSubmitButton.addEventListener('click', handleRacingCount);
};

const handleRacingCount = (e) => {
  let cars = e.currentTarget.cars;
  const racingCountInputElement = document.querySelector('#racing-count-input');
  const racingCount = racingCountInputElement.value;

  const error = isErrorRacingCount(racingCount);
  if (error) {
    return requestInputAgain(error, racingCountInputElement);
  }

  playGame(racingCount, cars);
};

const isErrorRacingCount = (count) => {
  if (count === '') {
    return 'countEmpty';
  }
  if (!Number.isInteger(+count)) {
    return 'countNotInteger';
  }
  if (+count <= 0) {
    return 'countTooSmall';
  }
  return false;
};

const playGame = (racingCount, cars) => {
  const gameResultHeader = document.querySelector('#game-result-header');
  gameResultHeader.insertAdjacentHTML(
    'afterend',
    '<div id="game-result-content"></div>'
  );
  displayElement('#game-result-header', 'block');
  for (let i = 0; i < racingCount; i++) {
    playOneTurn(cars);
    showCurrentScore(cars);
  }
  showFinalResult(cars);
  return cars;
};

const displayElement = (cssSelector, value) => {
  document.querySelector(cssSelector).style.display = value;
};

const playOneTurn = (cars) => {
  cars.forEach((v) => {
    const randomNumber = generateRandomInteger(0, 9);
    if (randomNumber >= 4) {
      v.score += '-';
    }
  });
};

const generateRandomInteger = (min, max) => {
  if (min > max) {
    let temp = min;
    min = max;
    max = temp;
  }
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const showCurrentScore = (cars) => {
  cars.forEach((v) =>
    appendAtEnd('#game-result-content', 'div', `${v.name}: ${v.score}`)
  );
  appendAtEnd('#game-result-content', 'br', '');
};

const appendAtEnd = (cssSelector, type, text) => {
  const parentNode = document.querySelector(cssSelector);
  let newNode = document.createElement(type);

  newNode.innerHTML = text;
  parentNode.append(newNode);
};

const showFinalResult = (cars) => {
  let max;
  let winners = '';

  cars.sort((a, b) => b.score.length - a.score.length);
  max = cars[0].score.length;
  winners = cars.filter((v) => v.score.length === max).map((car) => car.name);

  appendAtEnd(
    '#game-result-content',
    'div',
    `🥇최종 우승자: ${winners.join(', ')}`
  );
};

new RacingCarGame();
