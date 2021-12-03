import Car from "./Car.js"; // eslint-disable-line import/extensions
import validateCarInput from "./validateCarInput.js"; // eslint-disable-line import/extensions
import validateRacingInput from "./validateRacingInput.js"; // eslint-disable-line import/extensions

class Game {
  constructor() {
    this.cars = [];
    this.result = [];
    this.carInput = document.querySelector("#car-names-input");
    this.carSubmit = document.querySelector("#car-names-submit");
    this.racingCountTitle = document.querySelector("#racing-count-title");
    this.racingInput = document.querySelector("#racing-count-input");
    this.racingSubmit = document.querySelector("#racing-count-submit");
    this.resultTitle = document.querySelector("#result-title");
    this.carSubmit.addEventListener(
      "click",
      this.handleCarNameInput.bind(this)
    );
    this.racingSubmit.addEventListener(
      "click",
      this.handleRacingCountInput.bind(this)
    );
  }

  hideShowRacingCountSection(type) {
    this.racingCountTitle.style.display = type;
    this.racingInput.style.display = type;
    this.racingSubmit.style.display = type;
  }

  hideShowResultSection(type) {
    this.resultTitle.style.display = type;
  }

  handleCarNameInput(e) {
    e.preventDefault();
    const carInputIsValid = validateCarInput(this.carInput.value);
    if (carInputIsValid) {
      this.registerCars(this.carInput.value);
      this.hideShowRacingCountSection("");
    } else {
      alert("입력 값이 유효하지 않습니다."); // eslint-disable-line no-alert
      this.hideShowRacingCountSection("none");
    }
  }

  registerCars(cars) {
    const carArray = cars.split(",");
    this.cars = carArray.map((car) => {
      const carInstance = new Car(car);
      return carInstance;
    });
  }

  handleRacingCountInput(e) {
    e.preventDefault();
    const racingCount = this.racingInput.value * 1;
    const racingInputIsValid = validateRacingInput(racingCount);
    if (racingInputIsValid) {
      this.result = [];
      this.playGame(racingCount);
      this.hideShowResultSection("");
    } else {
      alert("입력 값이 유효하지 않습니다."); // eslint-disable-line no-alert
    }
  }

  playRound() {
    const roundResultArray = this.cars.map((c) => {
      const random = MissionUtils.Random.pickNumberInRange(0, 9); // eslint-disable-line

      // get previous results or start empty string
      const current = this.result[this.result.length - 1]
        ? this.result[this.result.length - 1][c.name]
        : "";

      if (random >= 4) return [c.name, `${current}-`];

      return [c.name, current];
    });
    // create object for each round from above created array
    this.result.push(Object.fromEntries(roundResultArray));
  }

  playGame(racingCount) {
    let roundsLeft = racingCount;

    // play each round
    while (roundsLeft > 0) {
      this.playRound();
      roundsLeft -= 1;
    }
  }
}

const game = new Game();

game.hideShowRacingCountSection("none");
game.hideShowResultSection("none");
