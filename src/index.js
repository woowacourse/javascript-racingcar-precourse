import RacingCarGame from "./game.js";
import { eventHandler } from "./handle-io.js";

const init = (game) => {
  eventHandler(game);
};

const racingCarGame = new RacingCarGame();
init(racingCarGame);
