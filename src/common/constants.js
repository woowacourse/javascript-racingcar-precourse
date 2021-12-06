const $carName = document.getElementById("car-names-input");
const $carNameSubmit = document.getElementById("car-names-submit");
const $racingCountTitle = document.getElementById("racing-count-title");
const $racingCount = document.getElementById("racing-count-input");
const $racingCountSubmit = document.getElementById("racing-count-submit");
const $status = document.getElementById("racing-status");
const $winner = document.getElementById("racing-winners");
const $racingResultTitle = document.getElementById("racing-result-title");

const NAME_MAX_LENGTH = 5;
const ERROR_CAR_NAME = "자동차의 이름을 형식에 맞춰서 작성해주세요.";
const ERROR_RACING_COUNT = "시도 횟수를 자연수로 입력해주세요.";

export {
  $carName,
  $carNameSubmit,
  $racingCountTitle,
  $racingCount,
  $racingCountSubmit,
  $winner,
  $status,
  $racingResultTitle,
  NAME_MAX_LENGTH,
  ERROR_CAR_NAME,
  ERROR_RACING_COUNT,
};
