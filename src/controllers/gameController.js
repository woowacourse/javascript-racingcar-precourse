import { ELEMENT_ID } from '../constants/index.js';
import DOMElement from '../views/domElement.js';

class GameController {
  gameModel;

  $gameView;

  constructor(gameModel, $gameView) {
    this.gameModel = gameModel;
    this.$gameView = $gameView;
  }

  progressGameToEnd() {
    for (let i = 0; i < this.gameModel.racingCount; i += 1) {
      this.gameModel.progressOneRound();
      this.$renderCurrentRound();
    }

    this.$renderWinnerNames();
  }

  $renderCurrentRound() {
    const $round = DOMElement.createByTagName('div');

    this.gameModel.lines.forEach((line) => {
      const $line = DOMElement.createByTagName('div');
      $line.setText(`${line.car.name}: ${'-'.repeat(line.position)}`);
      $round.appendChild($line);
    });

    this.$gameView.appendChild($round);
    this.$gameView.appendChild(DOMElement.createByTagName('br'));
  }

  $renderWinnerNames() {
    const winnerNames = this.gameModel
      .calculateWinLines()
      .map((line) => line.car.name);

    const $winnerWrapper = DOMElement.createByTagName('div');
    $winnerWrapper.setText('최종 우승자: ');

    const $winner = DOMElement.createByTagName('span');
    $winner.setId(ELEMENT_ID.RACING_WINNERS);
    $winner.setText(winnerNames.join(','));

    this.$gameView.appendChild($winnerWrapper);
    $winnerWrapper.appendChild($winner);
  }
}

export default GameController;
