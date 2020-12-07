import CarNameInput from "./CarNameInput.js";
import RacingCountInput from "./RacingCountInput.js";
import RacingResult from "./RacingResult.js";

export default class RacingCarGame {
  constructor({ $target }) {
    this.$container = document.createElement("div");
    this.$container.className = "car-game-container";
    $target.append(this.$container);

    this.carNames = [];
    this.racingCount = 0;
    this.components = {
      carNameInput: new CarNameInput({
        $target: this.$container,
        updateCarNames: this.updateCarNames,
      }),
      racingCountInput: new RacingCountInput({
        $target: this.$container,
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
      this.components = {
        ...this.components,
        racingResult: new RacingResult({
          $target: this.$container,
        }),
      };
    }
  };
}
