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

    this.setPlayers();
  }
}

export default CarNamesInputContainer;
