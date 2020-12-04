import { getCarsNameList } from "../utils/inputUtil.js";
import { isValidCarNames } from "../utils/validations.js";
import { ID, MESSAGE } from "../utils/constants.js";

class CarNamesInputContainer {
  constructor({ $target, setPlayers }) {
    this.$target = $target;
    this.$input = this.$target.querySelector(`#${ID.CAR_NAMES_INPUT}`);

    this.setPlayers = setPlayers;

    this.bindEvents();
  }

  bindEvents() {
    this.$target.addEventListener("click", this.onSubmit.bind(this));
  }

  onSubmit({ target }) {
    if (target.id !== ID.CAR_NAMES_SUBMIT_BUTTON) return;

    const names = getCarsNameList(this.$input.value);
    if (!isValidCarNames(names)) {
      alert(MESSAGE.NAME_INPUT_ERROR);
      this.$input.value = "";
      return;
    }
  }
}

export default CarNamesInputContainer;
