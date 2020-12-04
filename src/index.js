import { CAR_GAME_GUIDE as GAME_GUIDE } from "./constants.js";

export default function RacingCarGame() {
  const carNamesSubmit = document.getElementById("car-names-submit");
  const racingCountSubmit = document.getElementById("racing-count-submit");

  this.getNamesFromInput = () => {
    const carNamesInput = document.getElementById("car-names-input");
    const names = carNamesInput.value.split(",");

    this.checkErrorNames(names);
  };

  this.checkErrorNames = (names) => {
    if (!this.checkNameLength(names)) {
      alert(GAME_GUIDE.CAR_NAME_ERROR);
    } else {
      const racingCountContainer = document.getElementById(
        "racing-count-container"
      );
      racingCountContainer.style.visibility = "visible";
    }
  };

  this.checkNameLength = (names) => {
    let result = true;

    names.forEach((name) => {
      if (name.length > 5) {
        result = false;
      }
    });

    return result;
  };

  this.getRacingCount = () => {
    const racingCountInput = document.getElementById("racing-count-input");
    const racingCount = racingCountInput.value;

    this.checkRacingCountError(racingCount);
  };

  this.checkRacingCountError = (racingCount) => {
    if (Number.isNaN(parseInt(racingCount))) {
      alert(GAME_GUIDE.ONLY_NUMBER);
    } else {
      //TODOS:make instance
      //TODOS:make random
    }
  };

  carNamesSubmit.addEventListener("click", this.getNamesFromInput);
  racingCountSubmit.addEventListener("click", this.getRacingCount);
}
new RacingCarGame();
