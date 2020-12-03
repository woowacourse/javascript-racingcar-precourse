import InputCheck from "./inputCheck.js";
const inputCheck = new InputCheck();

export default function RacingCarGame() {
  let textSubmitBtn = document.getElementById("car-names-submit");
  let numSubmitBtn = document.getElementById("racing-count-submit");
  let words;
  let inputStrings;
  let inputNum;
  let isTextSubmitted = false;

  this.onTextSubmit = () => {
    inputStrings = document.getElementById("car-names-input").value;
    words = inputCheck.textCheck(inputStrings);
    isTextSubmitted = true;
  };

  this.onNumSubmit = () => {
    inputNum = document.getElementById("racing-count-input").value;
    if (isTextSubmitted) {
    }
  };

  textSubmitBtn.addEventListener("click", this.onTextSubmit);
  numSubmitBtn.addEventListener("click", this.onNumSubmit);
}

new RacingCarGame();
