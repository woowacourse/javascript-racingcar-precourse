import RacingCarGame from "./racingCarGame.js";
import InterfaceToHtml from "./interfaceToHtml.js";

const racingCarGame = new RacingCarGame();
new InterfaceToHtml({
  racingCarGame: racingCarGame,
  carGameContainer: document.getElementById("car-game-container"),
  gameResultContainer: document.getElementById("game-result-container"),
});
