import Game from '../classes/Game.js';
import { ID } from '../constants/index.js';
import { createMyElement } from '../utils/element.js';

class Result {
  constructor({ $resultTitle, state }) {
    this.$resultTitle = $resultTitle;
    this.state = state;

    this.showContents();
    this.selectDom();
    this.game = new Game(this.state.names);
    this.printResults(this.state.count);
  }

  showContents() {
    this.$resultTitle.removeAttribute('hidden');
  }

  selectDom() {
    this.$resultContainer = document.querySelector(`#${ID.RESULT_CONTAINER}`);
  }

  printResults(count) {
    while (count) {
      const advanceResults = this.game.advanceCar();
      advanceResults.forEach(({ name, distance }) => {
        this.printOneBlock(name, distance);
      });
      const br = document.createElement('br');
      this.$resultContainer.append(br);
      count--;
    }
    this.printWinner();
  }

  printOneBlock(name, distance) {
    const carContainer = document.createElement('div');
    const carText = createMyElement('span', `${name}: ${distance}`);
    carContainer.append(carText);
    this.$resultContainer.append(carContainer);
  }

  printWinner() {
    let winner = this.game.getWinner();
    winner = winner.reduce((acc, cur) => {
      return acc.concat(cur.name);
    }, []);

    const winnerTitle = createMyElement('span', '최종 우승자: ');
    const winnerName = createMyElement('span', `${[...winner]}`);
    winnerName.id = ID.RACING_WINNERS;
    this.$resultContainer.append(winnerTitle, winnerName);
  }
}

export default Result;
