import CarNamesInputContainer from "./CarNamesInputContainer.js";
import RacingCountInputContainer from "./RacingCountInputContainer.js";
import Car from "../classes/Car.js";

import { ID } from "../utils/constants.js";
import { hideElement, showElement } from "../utils/domUtil.js";

class RacingCarGame {
  constructor({ $target }) {
    this.$target = $target;
    this.mountDOM();
    this.resetDOM();
    this.mountComponent();
    this.state = this.initState();

    console.log(this);
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

  resetDOM() {
    hideElement(this.$RacingCountInputContainer);
    hideElement(this.$RacingResultContainer);
  }

  mountComponent() {
    this.carNamesInputContainer = new CarNamesInputContainer({
      $target: this.$CarNamesInputContainer,
      setPlayers: this.setPlayers.bind(this),
    });

    this.racingCountInputContainer = new RacingCountInputContainer({
      $target: this.$RacingCountInputContainer,
      setRound: this.setRound.bind(this),
    });
  }

  initState() {
    return {
      round: 0,
      players: [],
    };
  }

  setPlayers(names) {
    this.state.players = names.map(name => new Car(name));

    showElement(this.$RacingCountInputContainer);
  }

  setRound(num) {
    this.state.round = num;

    showElement(this.$RacingResultContainer);
  }
}

export default RacingCarGame;
