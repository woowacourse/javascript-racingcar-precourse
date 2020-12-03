import RacingCarGame from "./racingCarGame.js";
import InterfaceToHtml from "./interfaceToHtml.js";

new RacingCarGame();
new InterfaceToHtml({
  carGameContainer: document.getElementById("car-game-container"),
  gameResultContainer: document.getElementById("game-result-container"),
});
