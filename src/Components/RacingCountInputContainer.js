import { ID } from "../utils/constants.js";
import { blockContainer } from "../utils/domUtil.js";
import { isValidCountInput } from "../utils/validations.js";

class RacingCountInputContainer {
  constructor({ $target, setRound }) {
    this.$target = $target;
    this.$input = this.$target.querySelector(`#${ID.RACING_COUNT_INPUT}`);

    this.setRound = setRound;

    this.bindEvents();
  }

  bindEvents() {
    this.$target.addEventListener("click", this.onSubmit.bind(this));
  }

  onSubmit({ target }) {
    if (target.id !== ID.RACING_COUNT_SUBMIT_BUTTON) return;

    const round = this.$input.value.trim();

    if (!isValidCountInput(this.$input, round)) return;

    this.setRound(parseInt(round));
    blockContainer(this.$input, target);
  }
}

export default RacingCountInputContainer;
