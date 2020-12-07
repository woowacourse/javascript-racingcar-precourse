import { MESSAGE, NUMBER as NUM } from "./constants/constants.js";
import { Car } from "./classes/Car.js";
import { getRandomNumber } from "./utils/random.js";

export default function RacingCarGame() {
  const carNamesSubmit = document.getElementById("car-names-submit");
  const racingCountSubmit = document.getElementById("racing-count-submit");
  let names = [];
  this.getNamesFromInput = () => {
    const carNamesInput = document.getElementById("car-names-input");
    names = carNamesInput.value.split(",");
    console.log(names);
    this.checkErrorNames(names);
  };

  this.checkErrorNames = (names) => {
    if (this.checkNameLength(names)) {
      alert(MESSAGE.CAR_NAME_ERROR);
    } else if (this.hasSpaceInName(names)) {
      alert(MESSAGE.HAME_SPACE_ERROR);
    } else if (this.isDuplicate(names)) {
      alert(MESSAGE.IS_DUPLICATE_ERROR);
    } else if (this.hasEmptyName(names)) {
      alert(MESSAGE.HAS_EMPTY_NAME_ERROR);
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
      alert(MESSAGE.ONLY_NUMBER_ERROR);
    } else {
      console.log(racingCount);
      let cars = this.makeInstances();
      this.playRacingGame(cars, racingCount);
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

  this.playRacingGame = (cars, racingCount) => {
    let result = "";
    const resultContainer = document.getElementById("result-container");

    for (let i = 0; i < racingCount; i++) {
      this.racingInRound(cars, racingCount);
      result = result + this.getResultString(cars) + "</br>";
      console.log(result);
    }
    resultContainer.style.visibility = "visible";
    resultContainer.append(document.createTextNode(result));
  };

  this.racingInRound = (cars) => {
    cars.forEach((car) => {
      getRandomNumber(NUM.RANDOM_START, NUM.RANDOM_END) >=
      NUM.GO_FORWARD_CONDITION
        ? car.go()
        : car.stop();
    });
  };

  this.getResultString = (cars) => {
    let result = ``;

    cars.forEach((car) => {
      result += `${car.name}: ${"-".repeat(`${car.distance}`)}`;
    });
    return result;
  };

  this.getObject;
  carNamesSubmit.addEventListener("click", this.getNamesFromInput);
  racingCountSubmit.addEventListener("click", this.getRacingCount);
}
new RacingCarGame();
