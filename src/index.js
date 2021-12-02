const $car_names_input = document.getElementById("car-names-input");
const $car_names_submit = document.getElementById("car-names-submit");
const $racing_count_input = document.getElementById("racing-count-input");
const $racing_count_submit = document.getElementById("racing-count-submit");
let cars = [];
let racingCount = [];

const isCarInputsSplitBySpace = carInputs => {
  let isSplitBySpace = false;
  if (carInputs.split(" ").length >= 2) {
    isSplitBySpace = true;
  }

  return isSplitBySpace;
};

const isCarInputsOverFiveLength = carInputs => {
  let isOverFiveLength = false;
  carInputs.forEach(carInput => {
    if (carInput.length > 5) {
      isOverFiveLength = true;
    }
  });

  return isOverFiveLength;
};

const checkIsValidCarInputs = carInputs => {
  let isValid = true;
  if (isCarInputsSplitBySpace(carInputs)) {
    alert("자동차 이름을 공백이 아닌 콤마로 구분하여 입력해주세요.");
    isValid = false;
  } else if (isCarInputsOverFiveLength(carInputs.split(","))) {
    alert("자동차 이름을 5자 이하로 콤마로 구분하여 입력해주세요.");
    isValid = false;
  }

  return isValid;
};

const checkIsInputCar = racingCountInput => {
  let isInput = true;
  if (racingCountInput === []) {
    alert("자동차 이름을 입력 후 시도할 횟수를 입력해 주세요.");
    isInput = false;
  }

  return isInput;
};

const checkIsIntergerInput = racingCountInput => {
  let isInterger = true;
  if (!Number.isInteger(parseInt(racingCountInput))) {
    alert("시도할 횟수를 입력해 주세요.");
    isInterger = false;
  }

  return isInterger;
};

const checkIsValidCountInput = racingCountInput => {
  let isValid = true;
  if (!checkIsInputCar(racingCountInput)) {
    isValid = false;
  } else if (!checkIsIntergerInput(racingCountInput)) {
    isValid = false;
  }

  return isValid;
};

const onClickSubmitCarNames = () => {
  cars = [];
  const carInputs = $car_names_input.value;
  if (checkIsValidCarInputs(carInputs)) {
    cars = carInputs.split(",");
  }
};

const onClickSubmitRacingCount = () => {
  const racingCountInput = $racing_count_input.value;
  if (checkIsValidCountInput(racingCountInput)) {
    console.log("validInput");
  }
};

$car_names_submit.addEventListener("click", onClickSubmitCarNames);
$racing_count_submit.addEventListener("click", onClickSubmitRacingCount);
