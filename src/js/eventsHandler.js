import GetRacingCount from "./events/getRacingCountBtnClick.js";

export default class EventHandler extends GetRacingCount {
  constructor() {
    super();
    this.carNames = "";
    this.racingCount = "";
  }

  _onClickRacingCount() {
    super._onClickRacingCount();
    this.carNames = this.carNamesInput.value;
    this.racingCount = this.racingCountInput.value;
  }
}
