import { handleCountSubmit, handleNamesSubmit } from "./handler.js";
import { resetGame } from "./utils.js";

export default function RacingCarGame() {
  resetGame();

  document
    .getElementById("car-names-submit")
    .addEventListener("click", handleNamesSubmit.bind(this));

  document
    .getElementById("racing-count-submit")
    .addEventListener("click", handleCountSubmit.bind(this));
}

new RacingCarGame();
