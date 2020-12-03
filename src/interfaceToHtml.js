const CAR_NAME_TEXT_ID = "car-names-input";
const CAR_NAME_BUTTON_ID = "car-names-submit";
const RACING_COUNT_TEXT_ID = "racing-count-input";
const RACING_COUNT_BUTTON_ID = "racing-count-submit";
const GAME_STEP_ENUM = {
  NAME_INPUT: 1,
  RACING_COUNT: 2,
  GAME_RESULT: 3,
};

export default class InterfacetoHtml {
  constructor({ carGameContainer, gameResultContainer }) {
    this.currentStepInGame = GAME_STEP_ENUM.NAME_INPUT;
    this.carGameContainer = carGameContainer;
    this.gameResultContainer = gameResultContainer;
    this.processCarNameInput();
  }

  processCarNameInput() {
    if (this.currentStepInGame === GAME_STEP_ENUM.NAME_INPUT) {
      this.currentStepInGame++;
      this.drawHTML({
        containerWhereToDraw: this.carGameContainer,
        htmlWhatToDraw: `
        <div>
        <input type="text" id="${CAR_NAME_TEXT_ID}"/>
        <button id="${CAR_NAME_BUTTON_ID}">확인</button>
        </div>
        `,
      });
      this.addEventToButton({
        buttonId: CAR_NAME_BUTTON_ID,
        functionCallback: this.processRacingCount,
        functionElement: { containerWhereToDraw: this.carGameContainer },
      });
    }
  }
  processRacingCount() {
    console.log(this);
    if (this.currentStepInGame === GAME_STEP_ENUM.RACING_COUNT) {
      this.currentStepInGame++;
      this.drawHTML({
        containerWhereToDraw: this.carGameContainer,
        htmlWhatToDraw: `
        <div>
          <h4>시도할 횟수를 입력해주세요.</h4>
          <input type="number" id="${RACING_COUNT_TEXT_ID}"/>
          <button id="${RACING_COUNT_BUTTON_ID}">확인</button>
        </div>
        `,
      });
    }
  }

  drawGameResult({ containerWhereToDraw }) {
    containerWhereToDraw.insertAdjacentHTML(
      "beforeend",
      `
    <h4>📄 실행 결과</h4>
    `
    );
  }

  drawHTML({ containerWhereToDraw, htmlWhatToDraw }) {
    containerWhereToDraw.insertAdjacentHTML("beforeend", htmlWhatToDraw);
  }
  addEventToButton({ buttonId, functionCallback, functionElement }) {
    const button = document.getElementById(buttonId);
    button.addEventListener("click", () => {
      functionCallback.bind(this)(functionElement);
    });
  }
}
