import RacingCarGame from "./modules/RacingCarGame.js";

const carNamesForm = document.querySelector("#car-names-form");
const racingCountForm = document.querySelector("#racing-count-form");
const carGameResult = document.querySelector("#car-game-result");

function getCarNames() {
  const input = document.querySelector("#car-names-input");
  const carNames = input.value.split(",");
  const carNamesWithoutSpace = carNames.map(name => name.trim());

  return carNamesWithoutSpace;
}

function getRacingCount() {
  const input = document.querySelector("#racing-count-input");
  const racingCount = Number(input.value);

  return racingCount;
}

function isValidCarNames(carNames) {
  const MAX_CAR_NAME_LENGTH = 5;
  const isLValidCarNameLength = carNames.every(
    name => name.length > 0 && name.length <= MAX_CAR_NAME_LENGTH
  );
  const isMoreThanTwoCars = carNames.length > 1;

  if (isLValidCarNameLength && isMoreThanTwoCars) {
    return true;
  }

  return false;
}

function submitCarNames(e) {
  e.preventDefault();
  const carNames = getCarNames();
  const isValidInputValue = isValidCarNames(carNames);
  carGameResult.classList.remove("active");
  racingCountForm.classList.remove("active");

  if (isValidInputValue) {
    racingCountForm.classList.add("active");
    return;
  }

  alert("자동차 이름을 5자 이하로 콤마로 구분하여 입력해주세요.");
}

function submitRacingCount(e) {
  e.preventDefault();
  const racingCount = getRacingCount();
  const isValidRacingCount = racingCount > 0;

  if (isValidRacingCount) {
    const racingCarGame = new RacingCarGame(getCarNames(), racingCount);
    racingCarGame.play();
    carGameResult.classList.add("active");

    return;
  }

  carGameResult.classList.remove("active");
  alert("최소 한 번 이상 시도해야 합니다. 1 이상의 수를 입력해주세요.");
}

carNamesForm.addEventListener("submit", submitCarNames);
racingCountForm.addEventListener("submit", submitRacingCount);
