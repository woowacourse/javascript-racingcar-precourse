import Game from '../classes/Game.js';
import { ID } from '../constants/index.js';

class GameResult {
  constructor({ $resultContainer, state }) {
    this.$resultContainer = $resultContainer;
    this.state = state;
    this.game = new Game(this.state.names);
    this.printResults(this.state.count);
  }

  printResults(count) {
    while (count) {
      const advanceResults = this.game.advanceCar();
      advanceResults.forEach(({ name, distance }) => {
        const carContainer = document.createElement('div');
        const carText = document.createElement('span');
        carText.innerText = `${name}: ${distance}`;
        carContainer.append(carText);
        this.$resultContainer.append(carContainer);
      });
      const br = document.createElement('br');
      this.$resultContainer.append(br);
      count--;
    }

    this.printWinner();
  }

  printWinner() {
    let winner = this.game.getWinner();
    winner = winner.reduce((acc, cur) => {
      return acc.concat(cur.name);
    }, []);

    const winnerText = document.createElement('span');
    winnerText.id = ID.RACING_WINNERS;
    winnerText.innerText = `최종우승자: ${[...winner]}`;
    this.$resultContainer.append(winnerText);
  }
}

export default GameResult;
