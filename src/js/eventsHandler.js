import GetRacingCount from "./events/getRacingCountBtnClick.js";

export default class EventHandler extends GetRacingCount {
  constructor() {
    super();
    this.carNames = [];
    this.racingCount = 0;
  }

  _onClickRacingCount() {
    super._onClickRacingCount();
  }
}
