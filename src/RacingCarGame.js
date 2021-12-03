import CarNamesInputContainer from './components/CarNamesInputContainer.js';
import CountInputContainer from './components/CountInputContainer.js';

class RacingCarGame {
  constructor() {
    this.carNamesInputContainer = new CarNamesInputContainer();
    this.countInputContainer = new CountInputContainer();
  }
}

export default RacingCarGame;
