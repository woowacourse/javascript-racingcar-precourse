import { CAR_GAME_GUIDE as GAME_GUIDE } from "./constants.js";

export default function RacingCarGame() {
  const carNamesSubmit = document.getElementById("car-names-submit");
  const racingCountSubmit = document.getElementById("racing-count-submit");

  this.getNamesFromInput = () => {
    const carNamesInput = document.getElementById("car-names-input");
    const names = carNamesInput.value.split(",");
    console.log(names);
    this.checkErrorNames(names);
  };

  this.checkErrorNames = (names) => {
    if (this.checkNameLength(names)) {
      alert(GAME_GUIDE.CAR_NAME_ERROR);
    } else if (this.hasSpaceInName(names)) {
      alert(GAME_GUIDE.HAME_SPACE);
    } else if (this.isDuplicate(names)) {
      alert(GAME_GUIDE.IS_DUPLICATE);
    } else if (this.hasEmptyName(names)) {
      alert(GAME_GUIDE.HAS_EMPTY_NAME);
    } else {
      const racingCountContainer = document.getElementById(
        "racing-count-container"
      );
      carNamesSubmit.disabled = true;
      racingCountContainer.style.visibility = "visible";
    }
  };

  this.checkNameLength = (names) => {
    let result = false;

    names.some((name) => {
      if (name.length > 5) {
        result = true;
        return result;
      }
    });

    return result;
  };

  this.hasSpaceInName = (names) => {
    let result = false;

    names.some((name) => {
      if (name.search(/\s/) !== -1) {
        result = true;
        return result;
      }
    });

    return result;
  };

  this.isDuplicate = (names) => {
    let result = false;

    names.forEach((name) => {
      if (names.includes(name)) {
        result = true;
        return result;
      }
    });
    return result;
  };

  this.hasEmptyName = (names) => {
    let result = false;

    names.some((name) => {
      if (name === "") {
        result = true;
        return result;
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
      console.log(racingCount);
      //TODOS:make instance
      //TODOS:make random
    }
  };

  carNamesSubmit.addEventListener("click", this.getNamesFromInput);
  racingCountSubmit.addEventListener("click", this.getRacingCount);
}
new RacingCarGame();
