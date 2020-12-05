import { isValidInputNames, isValidInputCount } from "./util";

export default function RacingCarGame() {
  const carNamesSubmitBtn = document.querySelector("#car-names-submit");
  const carNamesInput = document.querySelector("#car-names-input");
  const racingCountInput = document.querySelector("#racing-count-input");
  const racingCountSubmitBtn = document.querySelector("#racing-count-submit");

  const gameStart = () => {
    if (isValidInputNames(carNamesInput.value)) {
      console.log("ok");
    } else {
      console.log("invalid");
    }
  };

  const setRaceRound = () => {
    if (isValidInputCount(racingCountInput.value)) {
      console.log("ok");
    } else {
      console.log("invalid");
    }
  };

  const init = () => {
    carNamesSubmitBtn.addEventListener("click", () => gameStart());
    racingCountSubmitBtn.addEventListener("click", () => setRaceRound());
    carNamesInput.addEventListener("keyup", event => {
      if (event.keyCode === 13) {
        gameStart();
      }
    });
    racingCountInput.addEventListener("keyup", event => {
      if (event.keyCode === 13) {
        setRaceRound();
      }
    });
  };

  init();
}

new RacingCarGame();
