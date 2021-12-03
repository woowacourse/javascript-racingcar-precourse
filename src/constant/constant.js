export const DOM = {
  carNamesInput: document.querySelector('#car-names-input'),
  carNamesSubmit: document.querySelector('#car-names-submit'),
  racingCountInput: document.querySelector('#racing-count-input'),
  racingCountSubmit: document.querySelector('#racing-count-submit'),
  $APP: document.querySelector('#app'),
  $DIV: document.createElement('div'),
};

export const ERROR_MESSAGE = {
  NO_EMPTY: '자동차 이름을 공백 없이 입력해주세요.',
  NO_BLANK: '공백 없이 입력해주세요.',
  NO_DUPLICATE: '중복되지 않은 자동차 이름을 입력해주세요.',
  NO_COMMA: '콤마(,)로 자동차 이름을 구분해주세요.',
  TO_LONG: '자동차 이름은 5글자 이하로 작성해주세요.',
  NO_POSITIVE_INTEGER: '양의 정수를 입력해주세요.',
};

export const CAUTION_MESSAGE = {
  FIRST_CAR_NAMES: '자동차 이름을 먼저 입력해주세요.',
  FIRST_CAR_NAMES_SUBMIT: '자동차 이름을 먼저 등록해주세요.',
};

export const NUMBER = {
  ZERO: 0,
  NINE: 9,
};
