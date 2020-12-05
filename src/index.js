import { CAR_GAME_GUIDE as GAME_GUIDE } from "./constants.js";
import { Car } from "./Car.js";
import { getRandomNumber } from "./utils.js";

export default function RacingCarGame() {
  const carNamesSubmit = document.getElementById("car-names-submit");
  const racingCountSubmit = document.getElementById("racing-count-submit");
  let names = [];
  const RANDOM_START = 0;
  const RANDOM_END = 9;
  const GO_FORWARD_CONDITION = 4;
  this.getNamesFromInput = () => {
    const carNamesInput = document.getElementById("car-names-input");
    names = carNamesInput.value.split(",");
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
    let namesForChecking = [];

    names.forEach((name) => {
      if (namesForChecking.includes(name)) {
        result = true;
        return result;
      } else {
        namesForChecking.push(name);
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
      let cars = this.makeInstances();
      this.startRacingGame(cars, racingCount);
    }
  };

  this.makeInstances = () => {
    let cars = [];

    names.forEach((name) => {
      cars.push(new Car(name));
    });

    console.log(cars);
    return cars;
  };

  this.startRacingGame = (cars, racingCount) => {
    for (let i = 0; i < racingCount; i++) {
      this.racingInRound(cars, racingCount);
      this.getResultString(cars);
    }
  };

  this.racingInRound = (cars) => {
    cars.forEach((car) => {
      getRandomNumber(RANDOM_START, RANDOM_END) >= GO_FORWARD_CONDITION
        ? car.go()
        : car.stop();
    });
  };

  this.getResultString = (cars) => {
    let result = ``;

    cars.forEach((car) => {
      result += `${car.name}: ${"-".repeat(`${car.distance}`)}\n`;
    });
  };
  carNamesSubmit.addEventListener("click", this.getNamesFromInput);
  racingCountSubmit.addEventListener("click", this.getRacingCount);
}
new RacingCarGame();
