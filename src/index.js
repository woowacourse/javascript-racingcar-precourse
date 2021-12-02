import RacingCarGame from "./game/racing-game.js";
import Input from "./game/input.js";

const game = new RacingCarGame();
const input = new Input(game);
input.init();
