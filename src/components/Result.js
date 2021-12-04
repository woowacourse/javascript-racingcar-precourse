import Game from '../classes/Game.js';

class GameResult {
  constructor({ $resultContainer, state }) {
    this.$resultContainer = $resultContainer;
    this.state = state;
    this.game = new Game(this.state.names);
  }
}

export default GameResult;
