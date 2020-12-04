import InputCheck from "./inputCheck.js";
import GetResult from "./getResult.js";

const inputCheck = new InputCheck();
const getResult = new GetResult();

export default function RacingCarGame() {
  let words;
  let gameContainer = document.getElementsByClassName("car-game-container")[0];
  let textSubmitBtn = document.getElementById("car-names-submit");
  let appContainer = document.getElementById("app");
  let numSubmitBtn;

  this.makeElement = (element, id, text) => {
    const newElement = document.createElement(element);
    const newElementText = document.createTextNode(text);

    // 특정 element에 대한 예외처리
    if (element === "input") {
      newElement.type = "number";
    }

    // id가 주어진 경우
    if (id !== "") {
      newElement.id = id;
    }

    newElement.appendChild(newElementText);

    return newElement;
  };

  this.onTextSubmit = () => {
    let inputStrings = document.getElementById("car-names-input").value;
    words = inputCheck.textCheck(inputStrings);
    if (words === false) {
      return;
    }

    textSubmitBtn.removeEventListener("click", this.onTextSubmit);
    let container = this.makeElement("div", "", "");
    container.appendChild(this.makeElement("h4", "", "시도할 횟수를 입력해주세요"));
    container.appendChild(this.makeElement("input", "racing-count-input", ""));
    container.appendChild(this.makeElement("button", "racing-count-submit", "확인"));
    gameContainer.appendChild(container);
    numSubmitBtn = document.getElementById("racing-count-submit");
    numSubmitBtn.addEventListener("click", this.onNumSubmit);
  };

  this.onNumSubmit = () => {
    let inputNum = Number(document.getElementById("racing-count-input").value);
    if (inputNum <= 0) {
      alert("1 이상의 수를 입력하세요!");
      return;
    }

    numSubmitBtn.removeEventListener("click", this.onNumSubmit);
    let container = this.makeElement("div", "result", "");
    container.appendChild(this.makeElement("h4", "", "📄 실행 결과"));
    appContainer.appendChild(container);
    getResult.makeCars(words);
    for (let i = 0; i < inputNum; i++) {
      getResult.printResult(words, result);
    }
    getResult.printWinner(result);
  };

  textSubmitBtn.addEventListener("click", this.onTextSubmit);
}

new RacingCarGame();
