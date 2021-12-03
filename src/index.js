import { RacingCarGame } from "./components/racing-car-game.js";
import { SELECTOR } from "./constants/constant.js";

const app = document.getElementById(SELECTOR.ID.APP);
new RacingCarGame(app);
