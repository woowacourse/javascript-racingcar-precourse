import CarNameInput from "./CarNameInput.js";
import RacingCountInput from "./RacingCountInput.js";

export default class RacingCarGame {
  constructor({ $target }) {
    this.$carGameContainer = document.createElement("div");
    this.$carGameContainer.className = "car-game-container";
    $target.append(this.$carGameContainer);

    this.carNames = [];
    this.components = {
      carNameInput: new CarNameInput({
        $target: this.$carGameContainer,
        updateCarNames: this.updateCarNames,
      }),
      racingCountInput: new RacingCountInput({
        $target: this.$carGameContainer,
        isShow: false,
      }),
    };
  }

  updateCarNames = ({ isValidCarNames, nextCarNames }) => {
    isValidCarNames
      ? this.setState({
          nextCarNames,
          nextIsShowRacingCountInput: true,
        })
      : this.setState({ nextIsShowRacingCountInput: false });
  };

  setState = ({ nextCarNames, nextIsShowRacingCountInput }) => {
    if (nextCarNames) {
      this.carNames = nextCarNames;
    }

    this.components.racingCountInput.setState(nextIsShowRacingCountInput);
  };
}
