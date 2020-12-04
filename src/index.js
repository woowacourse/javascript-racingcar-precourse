const carNamesForm = document.querySelector("#car-names-form");
const racingCountForm = document.querySelector("#racing-count-form");

function getCarNames() {
  const input = document.querySelector("#car-names-input");
  const carNames = input.value.split(",");
  const carNamesWithoutSpace = carNames.map(name => name.trim());

  return carNamesWithoutSpace;
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

  if (isValidInputValue) {
    racingCountForm.classList.add("active");
    return;
  }

  racingCountForm.classList.remove("active");
  alert("자동차 이름을 5자 이하로 콤마로 구분하여 입력해주세요.");
}


carNamesForm.addEventListener("submit", submitCarNames);
