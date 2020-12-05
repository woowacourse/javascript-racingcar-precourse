import { resultTitleHTML, playerHTML, winnerHTML } from "../utils/templates.js";

class RacingResultContainer {
  constructor({ $target, getPlayers, getWinnerNameList }) {
    this.$target = $target;
    this.getPlayers = getPlayers;
    this.getWinnerNameList = getWinnerNameList;

    this.resultHTML = resultTitleHTML();
  }

  createResultHTML() {
    const tempPlayers = this.getPlayers();

    const roundHTML =
      tempPlayers.reduce((acc, cur) => {
        acc += playerHTML(cur.name, cur.step);
        return acc;
      }, "<div>") + "</div><br/>";

    this.resultHTML += roundHTML;
  }

  createWinnerHTML() {
    const winners = this.getWinnerNameList();
    this.resultHTML += winnerHTML(winners);
  }

  render() {
    this.$target.innerHTML = this.resultHTML;
  }
}

export default RacingResultContainer;
