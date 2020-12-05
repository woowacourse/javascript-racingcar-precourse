import onCarButtonClick from "./onCarButtonClick.js";
import onIteratorClick from "./onIteratorClick.js";

export default function RacingCarGame() {
  this.carArray = [];
  this.setCarArray = (nextCarArray) => {
    this.carArray = nextCarArray;
  };
  const carButton = document.getElementById("car-names-submit");
  const iteratorButton = document.getElementById("racing-count-submit");
  carButton.addEventListener("click", onCarButtonClick.bind(this));
  iteratorButton.addEventListener("click", onIteratorClick.bind(this));
}

new RacingCarGame();
