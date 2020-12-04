const ONE_CAR = 1;
const REDUNDANT = 2;
const TOO_LONG = 3;
const ONLY_SPACE = 4;

export default function RacingCarGame() {
  const inputElements = document.querySelectorAll('.car-game-container input');
  const submitButtons = document.querySelectorAll('.car-game-container button');
  let carNamesInputElement = inputElements[0];
  let carNamesSubmitButton = submitButtons[0];
  carNamesInputElement.id = 'car-names-input';
  carNamesSubmitButton.id = 'car-names-submit';
  carNamesSubmitButton.addEventListener('click', handleCarNames);
}

const handleCarNames = () => {
  const separator = ',';
  const carNamesInputElement = document.querySelector('#car-names-input');
  let carNames = carNamesInputElement.value.split(separator);

  let errno = validateCarName(carNames);
  if (errno) {
    return requestInputAgain(errno, carNamesInputElement);
  }
  // createRacingCountTags();
};

const validateCarName = (carNames) => {
  if (carNames == '') {
    return 'emptyInput';
  }
  if (carNames.length <= 1) {
    return 'oneCar';
  }
  if (carNames.length != new Set(carNames).size) {
    return 'redundantCarName';
  }
  for (let name of carNames) {
    if (name.length < 1) {
      return 'noCarName';
    }
    if (name.length > 5) {
      return 'tooLongCarName';
    }
    if (name.replace(' ', '').length < 1) {
      return 'onlySpaceCarName';
    }
  }
  return false;
};

const requestInputAgain = (errno, element) => {
  let messages = {
    emptyInput: `\n🚨 안내 🚨\n\n 아무것도 입력되지 않았습니다.\n 게임 진행을 위해 자동차 이름을 입력해 주세요.`,
    oneCar: `\n🚨 안내 🚨\n\n 하나의 자동차 이름만 입력되었습니다.\n 경주를 위해 둘 이상의 자동차 이름을 입력해 주세요.`,
    redundantCarName: `\n🚨 안내 🚨\n\n 자동차의 이름이 서로 중복됩니다.\n 서로 다른 자동차 이름을 입력해 주세요.`,
    noCarName: `\n🚨 안내 🚨\n\n 콤마 뒤에 자동차이름이 입력되지 않았습니다.\n 자동차 이름을 콤마로 구분해서 입력해 주세요.`,
    tooLongCarName: `\n🚨 안내 🚨\n\n 자동차의 이름이 너무 깁니다.\n 5자 이하의 자동차 이름을 입력해 주세요.`,
    onlySpaceCarName: `\n🚨 안내 🚨\n\n 공백만으로는 이름이 될 수 없습니다.\n 구분 가능한 자동차 이름을 입력해 주세요.`,
  };
  alert(messages[errno]);
  element.value = '';
  element.focus();
};

new RacingCarGame();
