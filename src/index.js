import { hideRacingCount, hideResult } from "./initialState.js";

export default class RacingCarGame {
  constructor() {
    this.init();
  }
  init() {
    hideRacingCount();
    hideResult();
  }
}

new RacingCarGame();
