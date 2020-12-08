import { startGame, playGame, endGame } from "./utils.js";
import { carNamesButtonEvents, racingCountButtonEvents } from "./input.js";
import { BUTTON } from "./constants.js";

export default function RacingCarGame() {
  startGame(this);

  BUTTON.CAR_NAMES_BUTTON.addEventListener("click", (e) => {
    carNamesButtonEvents(this);
  });

  BUTTON.RACING_COUNT_BUTTON.addEventListener("click", (e) => {
    racingCountButtonEvents(this);
    playGame(this, this.carList);
    endGame(this.carList);
  });
}

new RacingCarGame();
