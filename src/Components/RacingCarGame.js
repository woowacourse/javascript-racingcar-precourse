import CarNamesInputContainer from "./CarNamesInputContainer.js";
import { ID } from "../utils/constants.js";

class RacingCarGame {
  constructor({ $target }) {
    this.$target = $target;
    this.mountDOM();
    this.mountComponent();
    this.state = this.initState();

    console.log(this);
  }

  initState() {
    return {
      round: 0,
      players: [],
    };
  }

  mountDOM() {
    this.$CarNamesInputContainer = this.$target.querySelector(
      `.${ID.CAR_NAMES_INPUT_CONTAINER}`,
    );
    this.$RacingCountInputContainer = this.$target.querySelector(
      `.${ID.RACING_COUNT_INPUT_CONTAINER}`,
    );
    this.$RacingResultContainer = this.$target.querySelector(
      `.${ID.RACING_RESULT_CONTAINER}`,
    );
  }

  mountComponent() {
    this.carNamesInputContainer = new CarNamesInputContainer({
      $target: this.$CarNamesInputContainer,
      setPlayers: this.setPlayers.bind(this),
    });
  }

  setPlayers(names) {}
}

export default RacingCarGame;
