export const CAR_NAME_SEPARATOR = ',';
export const CAR_NAME_LENGTH_LIMIT = 5;
export const WINNER_SEPARATOR = ', ';
export const SCORE_MARKER = '-';

export const ALERT_MESSAGES = {
  nameTooShort: `\n🚨 안내 🚨\n\n 공백만으로는 이름이 될 수 없습니다.\n 자동차 이름을 콤마로 구분해 입력해 주세요.`,
  nameTooLong: `\n🚨 안내 🚨\n\n 자동차의 이름이 너무 깁니다.\n ${CAR_NAME_LENGTH_LIMIT}자 이하의 자동차 이름을 입력해 주세요.`,
  namesOnlyOne: `\n🚨 안내 🚨\n\n 하나의 자동차 이름만 입력되었습니다.\n 경주를 위해 둘 이상의 자동차 이름을 입력해 주세요.`,
  namesRedundant: `\n🚨 안내 🚨\n\n 자동차의 이름이 서로 중복됩니다.\n 서로 다른 자동차 이름을 입력해 주세요.`,
  countEmpty: `\n🚨 안내 🚨\n\n 유효한 숫자가 입력되지 않았습니다.\n 게임 진행을 위해 시도횟수를 양의 정수로 입력해 주세요.`,
  countNotInteger: `\n🚨 안내 🚨\n\n 소수가 입력되었습니다\n 시도횟수를 정수로 입력해 주세요.`,
  countTooSmall: `\n🚨 안내 🚨\n\n 0 이하의 값이 입력되었습니다.\n 시도횟수를 양수로 입력해 주세요.`,
};

const inputElements = document.querySelectorAll('#app input');
const submitButtons = document.querySelectorAll('#app button');
const headers = document.querySelectorAll('#app h4');

export const carNamesInputElement = inputElements[0];
export const carNamesSubmitButton = submitButtons[0];
export const racingCountInputElement = inputElements[1];
export const racingCountSubmitButton = submitButtons[1];
export const racingCountHeader = headers[0];
export const gameResultHeader = headers[1];

export const setElementsId = () => {
  carNamesInputElement.id = 'car-names-input';
  carNamesSubmitButton.id = 'car-names-submit';
  racingCountInputElement.id = 'racing-count-input';
  racingCountSubmitButton.id = 'racing-count-submit';
  racingCountHeader.id = 'racing-count-header';
  gameResultHeader.id = 'game-result-header';
};
