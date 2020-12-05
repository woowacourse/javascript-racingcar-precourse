import { getCarsNameList } from "../utils/inputUtil.js";
import { blockContainer, showInputError } from "../utils/domUtil.js";
import {
  isDuplicatedNames,
  isEmptyInput,
  isValidCarNames,
} from "../utils/validations.js";
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

    const names = getCarsNameList(this.$input.value.trim());

    if (isEmptyInput(names)) {
      showInputError(this.$input, MESSAGE.EMPTY_INPUT_ERROR);
      return;
    }

    if (!isValidCarNames(names)) {
      showInputError(this.$input, MESSAGE.NAME_INPUT_ERROR);
      return;
    }

    if (isDuplicatedNames(names)) {
      showInputError(this.$input, MESSAGE.DUPLICATED_INPUT_ERROR);
      return;
    }

    this.setPlayers(names);
    blockContainer(this.$input, target);
  }
}

export default CarNamesInputContainer;
