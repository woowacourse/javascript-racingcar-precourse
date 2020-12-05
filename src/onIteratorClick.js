import {
  checkIteratorValidity,
  iterateBy,
  iterateByCarArrayLength,
  iteratorInput,
  renderCurrentState,
  renderWinner,
} from "./utils.js";

const onIteratorClick = function () {
  const checkedIterator = checkIteratorValidity(iteratorInput.value);
  if (!checkedIterator.value) {
    alert(checkedIterator.errorMessage);
    return;
  }
  document.getElementById("result-title").style.display = "block";
  iterateBy(
    parseInt(iteratorInput.value, 10),
    iterateByCarArrayLength.bind(this),
    renderCurrentState.bind(this)
  );
  renderWinner(this.carArray);
};

export default onIteratorClick;
