import CarNameInput from "./CarNameInput.js";
import RacingCountInput from "./RacingCountInput.js";

export default class RacingCarGame {
  constructor({ $target }) {
    this.$carGameContainer = document.createElement("div");
    this.$carGameContainer.className = "car-game-container";
    $target.append(this.$carGameContainer);

    this.carNames = [];
    this.racingCount = 0;
    this.components = {
      carNameInput: new CarNameInput({
        $target: this.$carGameContainer,
        updateCarNames: this.updateCarNames,
      }),
      racingCountInput: new RacingCountInput({
        $target: this.$carGameContainer,
        isShow: false,
        updateRacingCount: this.updateRacingCount,
      }),
    };
  }

  updateCarNames = ({ isValidCarNames, nextCarNames }) => {
    isValidCarNames
      ? this.setState({
          nextCarNames,
          nextIsShowRacingCountInput: true,
        })
      : this.setState({
          nextCarNames: [],
          nextIsShowRacingCountInput: false,
        });
  };

  updateRacingCount = ({ nextRacingCount }) => {
    this.setState({ nextRacingCount });
  };

  setState = ({ nextCarNames, nextIsShowRacingCountInput, nextRacingCount }) => {
    if (nextCarNames !== undefined) {
      this.carNames = nextCarNames;
      this.components.racingCountInput.setState(nextIsShowRacingCountInput);
    }

    if (nextRacingCount) {
      this.racingCount = nextRacingCount;
    }
  };
}
