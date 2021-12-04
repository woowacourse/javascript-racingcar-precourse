import Game from '../classes/Game.js';

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
      console.log(advanceResults);
      count--;
    }
  }
}

export default GameResult;
