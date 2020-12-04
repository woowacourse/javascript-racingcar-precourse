import { countContainer, resultContainer } from "./container.js";

import { displayContainer } from "./util.js";
import { handleCarNameSubmit, handleCountSubmit } from "./handler.js";

export default class RacingCarGame {
  constructor() {
    handleCarNameSubmit();
    handleCountSubmit();
    this.initDisplay();
  }

  initDisplay = () => {
    displayContainer(countContainer, false);
    displayContainer(resultContainer, false);
  };
}

new RacingCarGame();
