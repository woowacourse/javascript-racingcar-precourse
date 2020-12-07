import RacingCarGame from "./Components/racingCarGame.js";
import { initHTML, hideForms } from "./Manager/uiManager.js";
import { onNameSubmit, onRoundSubmit } from "./Manager/gameManager.js";

export default function main() {
  const game = new RacingCarGame();

  initHTML();
  hideForms();

  document.getElementById("car-names-submit").addEventListener("click", onNameSubmit.bind(game));
  document.getElementById("racing-count-submit").addEventListener("click", onRoundSubmit.bind(game));
}
