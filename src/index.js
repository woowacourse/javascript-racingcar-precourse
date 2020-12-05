import RacingCarGame from "./Components/RacingCarGame.js";
import { ID } from "./utils/constants.js";

new RacingCarGame({ $target: document.querySelector(`#${ID.APP}`) });
