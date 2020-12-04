export default class InterfacetoHtml {
  constructor({ carGameContainer, gameResultContainer }) {
    this.currentGameStep = NAME_INPUT_STEP;
    this.carGameContainer = carGameContainer;
    this.gameResultContainer = gameResultContainer;
    this.processCarNameInput();
  }

  processCarNameInput() {
    this.drawHTML({
      containerWhereToDraw: this.carGameContainer,
      htmlToDraw: HTML_TEMPLATE.NAME_INPUT,
    });
    this.addEventToButton({
      stepToActivateButton: this.currentGameStep,
      functionOfNextStep: this.processRacingCount,
    });
  }
  processRacingCount() {
    this.drawHTML({
      containerWhereToDraw: this.carGameContainer,
      htmlToDraw: HTML_TEMPLATE.RACING_COUNT,
    });
    this.addEventToButton({
      stepToActivateButton: this.currentGameStep,
      functionOfNextStep: this.processGameResult,
    });
  }
  processGameResult() {
    this.drawHTML({
      containerWhereToDraw: this.gameResultContainer,
      htmlToDraw: HTML_TEMPLATE.RESULT,
    });
  }

  drawHTML({ containerWhereToDraw, htmlToDraw }) {
    containerWhereToDraw.insertAdjacentHTML("beforeend", htmlToDraw);
  }
  addEventToButton({ stepToActivateButton, functionOfNextStep }) {
    const button = document.getElementById(
      ID_NAME[stepToActivateButton].BUTTON
    );
    button.addEventListener("click", () => {
      if (this.currentGameStep === stepToActivateButton) {
        this.changeToNextStep();
        this.submitInputValueToGame(stepToActivateButton);
        functionOfNextStep.bind(this)();
      }
    });
  }

  changeToNextStep() {
    this.currentGameStep++;
  }
  submitInputValueToGame(gameStep) {
    const inputValue = document.getElementById(ID_NAME[gameStep].INPUT_TEXT).value;
    switch (gameStep) {
      case NAME_INPUT_STEP:
        console.log(inputValue, "NAME_INPUT_STEP");
        break;
      case RACING_COUNT_STEP:
        console.log(inputValue, "RACING_COUNT_STEP");
        break;
      default:
        console.log(inputValue, "오류");
    }
  }
}

//GAME_STEP_ENUM
const NAME_INPUT_STEP = 0;
const RACING_COUNT_STEP = 1;
const RESULT_STEP = 2;
const GAME_END_STEP = 3;

const ID_NAME = [
  {
    INPUT_TEXT: "car-names-input",
    BUTTON: "car-names-submit",
  },
  {
    INPUT_TEXT: "racing-count-input",
    BUTTON: "racing-count-submit",
  },
];

const HTML_TEMPLATE = {
  NAME_INPUT: `
  <div>
  <input type="text" id="${ID_NAME[NAME_INPUT_STEP].INPUT_TEXT}"/>
  <button id="${ID_NAME[NAME_INPUT_STEP].BUTTON}">확인</button>
  </div>
  `,
  RACING_COUNT: `
  <div>
    <h4>시도할 횟수를 입력해주세요.</h4>
    <input type="number" id="${ID_NAME[RACING_COUNT_STEP].INPUT_TEXT}"/>
    <button id="${ID_NAME[RACING_COUNT_STEP].BUTTON}">확인</button>
  </div>
  `,
  RESULT: `
  <h4>📄 실행 결과</h4>
  `,
};
