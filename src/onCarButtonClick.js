import {
  carInput,
  checkCarNameValidity,
  showIteratorElements,
  switchToCarInstance,
} from "./utils.js";

const onCarButtonClick = function () {
  const checkedCarNames = checkCarNameValidity(carInput.value);
  if (!checkedCarNames.value) {
    alert(checkedCarNames.errorMessage);
    return;
  }
  this.setCarArray(
    checkedCarNames.value.map((name) => switchToCarInstance(name))
  );
  showIteratorElements();
};

export default onCarButtonClick;
