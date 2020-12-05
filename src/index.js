import { hideTags } from "./controlTags.js";
import { carNamesSubmitHandler } from "./eventHandler.js";
function gameStart(play) {
  const carNamesSubmit = document.querySelector("#car-names-submit");
  hideTags();
  carNamesSubmit.addEventListener("click", () => carNamesSubmitHandler(play));
}

export default function RacingCarGame() {
  this.car = [];
}

const play = new RacingCarGame();

gameStart(play);
