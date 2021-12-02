const $car_names_input = document.getElementById("car-names-input");
const $car_names_submit = document.getElementById("car-names-submit");
let cars = [];

const onClickSubmitCarNames = () => {
  cars = [];
  const carInputs = $car_names_input.value;
  if (checkIsValidCarInputs(carInputs)) {
    cars = carInputs.split(",");
  }
};

const isCarInputsSplitBySpace = carInputs => {
  let isSplitBySpace = false;
  if (carInputs.split(" ").length > 2) {
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

$car_names_submit.addEventListener("click", onClickSubmitCarNames);
