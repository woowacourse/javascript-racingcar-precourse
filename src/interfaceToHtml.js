import { STEP, ID_NAME } from "./sharedVariable.js";

export default class InterfacetoHtml {
  constructor({ racingCarGame, carGameContainer, gameResultContainer }) {
    this.racingCarGame = racingCarGame;
    this.currentGameStep = STEP.NAME_INPUT;
    this.carGameContainer = carGameContainer;
    this.gameResultContainer = gameResultContainer;
    this.drawNameInput();
  }

  //html 그리기 메서드들
  drawNameInput() {
    this.drawHTML({
      containerWhereToDraw: this.carGameContainer,
      htmlToDraw: HTML_TEMPLATE.NAME_INPUT,
    });
    this.addEventToButton({
      stepOfButton: this.currentGameStep,
      functionOfNextStep: this.drawRacingCount,
    });
  }
  drawRacingCount() {
    this.drawHTML({
      containerWhereToDraw: this.carGameContainer,
      htmlToDraw: HTML_TEMPLATE.RACING_COUNT,
    });
    this.addEventToButton({
      stepOfButton: this.currentGameStep,
      functionOfNextStep: this.drawGameResult,
    });
  }
  drawGameResult() {
    this.drawHTML({
      containerWhereToDraw: this.gameResultContainer,
      htmlToDraw: HTML_TEMPLATE.RESULT,
    });
  }

  //그리기 메서드들에서 사용하는 공통 메서드들
  drawHTML({ containerWhereToDraw, htmlToDraw }) {
    containerWhereToDraw.insertAdjacentHTML("beforeend", htmlToDraw);
  }
  addEventToButton({ stepOfButton, functionOfNextStep }) {
    const button = document.getElementById(ID_NAME[stepOfButton].BUTTON);
    button.addEventListener("click", () => {
      this.buttonCallback(stepOfButton, functionOfNextStep);
    });
  }
  buttonCallback(stepOfButton, functionOfNextStep) {
    const input = document.getElementById(ID_NAME[stepOfButton].INPUT_TEXT);
    const { isValidInput, processedInput } = this.checkInput(
      stepOfButton,
      input.value
    );
    if (this.currentGameStep !== stepOfButton || !isValidInput) {
      return;
    }
    this.changeToNextStep();
    this.racingCarGame.updateInputFromHtml(stepOfButton, processedInput);
    functionOfNextStep.bind(this)();
  }
  changeToNextStep() {
    this.currentGameStep++;
  }

  //입력값 체크 함수들
  checkInput(gameStep, inputValue) {
    let isValidInput = false;
    let processedInput = null;
    switch (gameStep) {
      case STEP.NAME_INPUT:
        processedInput = this.processNameInputValue(inputValue);
        isValidInput = this.checkNameInputValue(processedInput);
        break;
      case STEP.RACING_COUNT:
        processedInput = Number(inputValue);
        isValidInput = this.checkRacingCountValue(processedInput);
        break;
      default:
        console.log("오류");
    }
    return { isValidInput, processedInput };
  }
  processNameInputValue(inputValue) {
    const processedInput = inputValue.split(",");
    return processedInput;
  }
  checkNameInputValue(processedInput) {
    let isValidInput = true;
    for (let e of processedInput) {
      //유효하지 않은 input을 체크
      if (e.length > 5 || e.length === 0 || e[0] === " ") {
        alert(
          "자동차의 이름은 1자 이상 5자 이하여야 하고 첫 글자 공백을 허용하지 않습니다."
        );
        isValidInput = false;
        break;
      }
    }
    return isValidInput;
  }
  checkRacingCountValue(processedInput) {
    let isValidInput = true;
    if (isNaN(processedInput) || processedInput <= 0) {
      alert("레이싱 경기 횟수는 1이상의 숫자여야 합니다.");
      isValidInput = false;
    }
    return isValidInput;
  }
}

const HTML_TEMPLATE = {
  NAME_INPUT: `
  <div>
  <input type="text" id="${ID_NAME[STEP.NAME_INPUT].INPUT_TEXT}"/>
  <button id="${ID_NAME[STEP.NAME_INPUT].BUTTON}">확인</button>
  </div>
  `,
  RACING_COUNT: `
  <div>
    <h4>시도할 횟수를 입력해주세요.</h4>
    <input type="number" id="${ID_NAME[STEP.RACING_COUNT].INPUT_TEXT}"/>
    <button id="${ID_NAME[STEP.RACING_COUNT].BUTTON}">확인</button>
  </div>
  `,
  RESULT: `
  <h4>📄 실행 결과</h4>
  `,
};
