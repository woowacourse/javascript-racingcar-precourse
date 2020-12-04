import CarNamesInputContainer from "./CarNamesInputContainer.js";
import Car from "../classes/Car.js";

import { ID } from "../utils/constants.js";
import { showElement } from "../utils/domUtil.js";

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

  setPlayers(names) {
    this.state.players = names.map(name => new Car(name));

    showElement(this.$RacingCountInputContainer);
  }
}

export default RacingCarGame;
