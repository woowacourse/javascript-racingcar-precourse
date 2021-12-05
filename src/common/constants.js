const $carName = document.getElementById("car-names-input");
const $carNameSubmit = document.getElementById("car-names-submit");
const $racingCount = document.getElementById("racing-count-input");
const $racingCountSubmit = document.getElementById("racing-count-submit");
const $status = document.getElementById("racing-status");
const $winner = document.getElementById("racing-winners");

const NAME_MAX_LENGTH = 5;
const ERROR_CAR_NAME = "자동차의 이름을 형식에 맞춰서 작성해주세요.";

export {
  $carName,
  $carNameSubmit,
  $racingCount,
  $racingCountSubmit,
  $winner,
  NAME_MAX_LENGTH,
  ERROR_CAR_NAME,
  $status,
};
