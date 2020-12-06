import { getCarsNameList } from "../utils/inputUtil.js";
import { blockContainer } from "../utils/domUtil.js";
import { isVaildNamesInput } from "../utils/validations.js";
import { ID } from "../utils/constants.js";

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

    if (!isVaildNamesInput(this.$input, names)) return;

    this.setPlayers(names);
    blockContainer(this.$input, target);
  }
}

export default CarNamesInputContainer;
