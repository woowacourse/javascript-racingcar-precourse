import { $ } from './dom/dom.js';
import makeCarList from './car/makeCarList.js';
import InputCars from './userInput/inputCars.js';
import InputCount from './userInput/inputCount.js';
import drawResultContainer from './draw/drawResultContainer.js';
import Play from './play.js';

export default function CarRacing() {
  this.gameObject = {
    gameCount : 0,
    carNameList: [],
    carList:[]
  }
  this.start = () => {
    addCarNamesEventListener();
  }
  const addCarNamesEventListener = () => {
    const carNamesContainer = $('#car-names-form');
    const carNamesSubmitBtn = $('#car-names-submit');
    carNamesContainer.addEventListener('submit', (e) => {
      e.preventDefault();
    })
    carNamesSubmitBtn.addEventListener('click', () => {
      this.gameObject.carNameList = InputCars();
      if (this.gameObject.carNameList) {
        this.gameObject.carList = makeCarList(this.gameObject.carNameList);
        carNamesSubmitBtn.disabled = true;
        addCountEventListener();
      } 
    });
  }
  const addCountEventListener = () => {
    const racingCountSubmitContainer = $('#racing-count-form');
    const racingCountSubmitBtn = $('#racing-count-submit');
    racingCountSubmitContainer.addEventListener('submit', e => {
      e.preventDefault();
    })
    racingCountSubmitBtn.addEventListener('click', () => {
      this.gameObject.gameCount = InputCount();
      if (this.gameObject.gameCount) {
        racingCountSubmitBtn.disabled = true;
      }
    });
  }
  
}
const newgame = new CarRacing();
newgame.start();
