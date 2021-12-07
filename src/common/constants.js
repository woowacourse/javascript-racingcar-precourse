const $carName = document.getElementById("car-names-input");
const $carNameSubmit = document.getElementById("car-names-submit");
const $racingCountTitle = document.getElementById("racing-count-title");
const $racingCount = document.getElementById("racing-count-input");
const $racingCountSubmit = document.getElementById("racing-count-submit");
const $racingResultTitle = document.getElementById("racing-result-title");

const $winner = document.createElement("span");
const $racingStatus = document.createElement("span");

const NAME_MAX_LENGTH = 5;
const ERROR_CAR_NAME = "자동차의 이름을 형식에 맞춰서 작성해주세요.";
const ERROR_RACING_COUNT = "시도 횟수를 자연수로 입력해주세요.";

const MIN_RANDOM = 0;
const MAX_RANDOM = 9;
const RANDOM_POINT = 4;
const EMPTY = "";

export {
  $carName,
  $carNameSubmit,
  $racingCountTitle,
  $racingCount,
  $racingCountSubmit,
  $winner,
  $racingStatus,
  $racingResultTitle,
  NAME_MAX_LENGTH,
  ERROR_CAR_NAME,
  ERROR_RACING_COUNT,
  MIN_RANDOM,
  MAX_RANDOM,
  RANDOM_POINT,
  EMPTY,
};
