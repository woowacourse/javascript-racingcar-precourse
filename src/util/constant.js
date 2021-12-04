export const DOMS = Object.freeze({
  $racingCountInput: document.querySelector("#racing-count-input"),
  $carNamesInput: document.querySelector("#car-names-input"),
  $racingCountForm: document
    .querySelector("#racing-count-input")
    .closest("form"),
  $carNamesForm: document.querySelector("#car-names-input").closest("form"),
  $racingCountButton: document.querySelector("#racing-count-submit"),
  $app: document.querySelector("#app"),
  $racingCountHead: document.querySelectorAll("h4")[0],
  $resultHead: document.querySelectorAll("h4")[1],
});

export const CAR_MOVE_RANGE = Object.freeze({
  MIN: 0,
  MAX: 9,
  POINT: 4,
});

export const VALID_NUMBER = Object.freeze({
  CAR_NAME_LENGTH: 5,
  RACING_COUNT: 0,
});

export const ALERT_MESSAGE = Object.freeze({
  OVER_ZERO: "1이상의 숫자를 입력해주세요",
  DUPLICATED_NAME: "이름이 중복되었습니다",
  NO_EMPTY_NAME: "이름은 공백이 될수 없습니다",
  NOT_OVER_FIVE_NAME: "이름은 5글자이하로 입력해주세요",
  NO_SPACE_IN_NAME: "이름에 공백이 포함되서는 안됩니다",
});
