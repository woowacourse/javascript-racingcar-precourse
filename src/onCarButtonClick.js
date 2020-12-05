import {
  carInput,
  checkCarNameValidity,
  showIteratorElements,
  switchToCarInstance,
} from "./utils.js";

const onCarButtonClick = function () {
  const checkedCarNames = checkCarNameValidity(carInput.value);
  if (checkedCarNames.value) {
    this.setCarArray(
      checkedCarNames.value.map((name) => switchToCarInstance(name))
    );
    showIteratorElements();
  } else alert(checkedCarNames.errorMessage);
};

export default onCarButtonClick;
