import InputCheck from "./inputCheck.js";
import GetResult from "./getResult.js";
const inputCheck = new InputCheck();
const getResult = new GetResult();

export default function RacingCarGame() {
  let textSubmitBtn = document.getElementById("car-names-submit");
  let numSubmitBtn = document.getElementById("racing-count-submit");
  let words;
  let isTextSubmitted = false;

  this.onTextSubmit = () => {
    let inputStrings = document.getElementById("car-names-input").value;
    words = inputCheck.textCheck(inputStrings);
    isTextSubmitted = true;
  };

  this.onNumSubmit = () => {
    let i;
    let result = document.getElementById("result");
    let inputNum = Number(document.getElementById("racing-count-input").value);
    if (isTextSubmitted) {
      getResult.makeCar(words);
      for (i = 0; i < inputNum; i++) {
        getResult.printResult(words, result);
      }
    }
  };

  textSubmitBtn.addEventListener("click", this.onTextSubmit);
  numSubmitBtn.addEventListener("click", this.onNumSubmit);
}

new RacingCarGame();
