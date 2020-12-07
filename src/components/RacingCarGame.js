import CarNameInput from "./CarNameInput.js";

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
    };
  }

  updateCarNames = (nextCarNames) => {
    this.setState({ nextCarNames });
  };

  setState = ({ nextCarNames }) => {
    this.carNames = nextCarNames;
  };
}
