import InputCheck from "./inputCheck.js";
import GetResult from "./getResult.js";
import Element from "./element.js";

const inputCheck = new InputCheck();
const getResult = new GetResult();
const element = new Element();

export default function RacingCarGame() {
  let words;
  let gameContainer = document.getElementsByClassName("car-game-container")[0];
  let textSubmitBtn = document.getElementById("car-names-submit");
  let appContainer = document.getElementById("app");
  let numSubmitBtn;

  this.onCarNamesSubmit = () => {
    let inputStrings = document.getElementById("car-names-input").value;
    words = inputCheck.textCheck(inputStrings);
    if (words === false) {
      return;
    }
    textSubmitBtn.removeEventListener("click", this.onCarNamesSubmit); // car names가 정상적으로 입력되었으므로 더 이상의 클릭에도 반응이 없도록 하기 위함.
    let container = element.makeContainer("inputCount");
    gameContainer.appendChild(container);
    numSubmitBtn = document.getElementById("racing-count-submit");
    numSubmitBtn.addEventListener("click", this.onCountSubmit);
  };

  this.onCountSubmit = () => {
    let inputNum = Number(document.getElementById("racing-count-input").value);
    if (inputCheck.numCheck(inputNum) === false) {
      return;
    }
    numSubmitBtn.removeEventListener("click", this.onCountSubmit); // raicing count가 정상적으로 입력되었으므로 더 이상의 클릭에도 반응이 없도록 하기 위함.
    let container = element.makeContainer("result");
    appContainer.appendChild(container);
    getResult.makeCars(words);
    for (let i = 0; i < inputNum; i++) {
      getResult.printResult(words, result);
    }
    getResult.printWinner(result);
  };

  textSubmitBtn.addEventListener("click", this.onCarNamesSubmit);
}

new RacingCarGame();
