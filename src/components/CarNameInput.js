import { ELEMENT_ID } from "../util/constants.js";

export default class CarNameInput {
  constructor({ $target, updateCarNames }) {
    this.$target = $target;
    this.updateCarNames = updateCarNames;
    this.carNameMaxLength = 5;

    this.init();
    this.bindEventListener();
  }

  init = () => {
    const HTMLString = `
      <div>
        <input id="${ELEMENT_ID.carNamesInput}" type="text" />
        <button id="${ELEMENT_ID.carNamesButton}">확인</button>
      </div>
    `;

    this.$target.insertAdjacentHTML("beforeend", HTMLString);
  };

  isValidCarNameLength = (carNames) => {
    return !carNames.some((carName) => carName.length === 0 || carName.length > this.carNameMaxLength);
  };

  onSubmitCarNames = () => {
    const inputCarNames = document.querySelector(`#${ELEMENT_ID.carNamesInput}`).value.split(",");

    console.log(this.isValidCarNameLength(inputCarNames));
  };

  bindEventListener = () => {
    document.querySelector(`#${ELEMENT_ID.carNamesButton}`).addEventListener("click", this.onSubmitCarNames);
  };
}
