import { ELEMENT_ID } from "../util/constants.js";

export default class CarNameInput {
  constructor({ $target }) {
    this.$target = $target;
    this.inputNames = "";

    this.render();
  }

  render() {
    const HTMLString = `
      <div>
        <input id="${ELEMENT_ID.carNamesInput}" type="text" />
        <button id="${ELEMENT_ID.carNamesButton}">확인</button>
      </div>
    `;

    this.$target.insertAdjacentHTML("beforeend", HTMLString);
  }
}
