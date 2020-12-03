import onCarButtonClick from "./onCarButtonClick.js";
import onIteratorClick from "./onIteratorClick.js";

export default function RacingCarGame() {
  const carInput = document.getElementById("car-names-input");
  const carButton = document.getElementById("car-names-submit");
  const iteratorInput = document.getElementById("racing-count-input");
  const iteratorButton = document.getElementById("racing-count-submit");
  carButton.addEventListener("click", onCarButtonClick.bind(this));
  iteratorButton.addEventListener("click", onIteratorClick.bind(this));
}

new RacingCarGame();
