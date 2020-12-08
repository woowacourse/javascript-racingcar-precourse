import { handleCountSubmit, handleNamesSubmit } from "./handler.js"
import { init } from "./initial.js"

export default function RacingCarGame() {
  init();
  const carNameSubmit = document.getElementById("car-names-submit");
  carNameSubmit.addEventListener("click", handleNamesSubmit.bind(this));

  const racingCountSubmit = document.getElementById("racing-count-submit")
  racingCountSubmit.addEventListener("click", handleCountSubmit.bind(this));
}


new RacingCarGame();
