export const ELEMENT_ID = Object.freeze({
  carNamesForm: '#car-names-form',
  carNamesInput: '#car-names-input',
  carNamesSubmit: '#car-names-submit',
  racingCountForm: '#racing-count-form',
  racingCountInput: '#racing-count-input',
  racingCountSubmit: '#racing-count-submit',
  app: '#app',
});

export const NUMBER_RULE = Object.freeze({
  MIN_NUMBER: 1,
  MAX_NUMBER: 9,
  FORWARD_NUMBER: 4,
  MAX_CAR_NAME_LENGTH: 5,
});

export const ALERT_MESSAGE = Object.freeze({
  WRONG_COUNT_NUMBER: '시도할 횟수 입력이 올바르지 않습니다.',
  CAR_NOT_EXIT: '자동차 이름을 입력하고 확인 버튼을 눌러주세요.',
  WRONG_CAR_NAME_LENGTH: '자동차 이름은 5글자 이하로 입력해 주세요.',
});

export const EVENT_TYPE = Object.freeze({
  SUBMIT: '@submit',
});
