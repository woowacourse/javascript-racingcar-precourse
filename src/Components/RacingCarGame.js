import CarNamesInputContainer from "./CarNamesInputContainer.js";
import { ID } from "../utils/constants.js";

class RacingCarGame {
  constructor({ $target }) {
    this.$target = $target;
    this.state = this.initState();
    this.mount();
  }

  initState() {
    return {
      round: 0,
      players: [],
    };
  }

  mount() {
    this.carNamesInputContainer = new CarNamesInputContainer({
      $target: document.querySelector(`.${ID.CAR_NAMES_INPUT_CONTAINER}`),
      setPlayers: this.setPlayers.bind(this),
    });
  }

  setPlayers() {}
}

export default RacingCarGame;
