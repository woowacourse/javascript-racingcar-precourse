import { $ } from './dom.js';
import InputCars from './userInput/inputCars.js';
import InputCount from './userInput/inputCount.js';

export default function CarRacing() {
  this.gameObject = {
    gameCount : 0,
    carList : []
  }
  this.init = () => {
    const carNamesSubmitBtn = $('#car-names-submit');
    const racingCountSubmitBtn = $('#racing-count-submit');
    carNamesSubmitBtn.addEventListener('click', () => {
      this.gameObject.carList = InputCars();
    });
    racingCountSubmitBtn.addEventListener('click', () => {
      this.gameObject.gameCount = InputCount();
    });
  }
}
const newgame = new CarRacing();
newgame.init();