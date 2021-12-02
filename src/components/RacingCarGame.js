import Component from '../core/Component.js';
import Car from '../core/Car.js';
import CarNamesForm from './CarNamesForm.js';
import RacingCountForm from './RacingCountForm.js';
import GameResult from './GameResult.js';
import { $, createElement } from '../utils/dom.js';
import { GAME_STATUS } from '../utils/constants.js';

export default class RacingCarGame extends Component {
  initDoms() {
    this.container = $('#app');
    const resultElem = createElement('game-result');
    this.container.appendChild(resultElem);
  }

  initState() {
    this.state = {
      cars: [],
      racingCount: 0,
      gameStatus: GAME_STATUS.NAMES_REQUIRED,
      gameResult: [],
    };
  }

  initChildrens() {
    const { gameStatus, gameResult } = this.state;
    this.childrens = [
      new CarNamesForm({
        gameStatus,
        onSubmit: names => this.onSubmitCarNames(names),
      }),
      new RacingCountForm({
        gameStatus,
        onSubmit: count => this.onSubmitRacingCount(count),
      }),
      new GameResult({
        gameStatus,
        gameResult,
      }),
    ];
  }

  onSubmitCarNames(names) {
    const cars = names.map(name => new Car(name));
    this.setState({ cars, gameStatus: GAME_STATUS.RACING_COUNT_REQUIRED });
  }

  onSubmitRacingCount(count) {
    const gameResult = this.play(count);
    this.setState({ count, gameStatus: GAME_STATUS.END, gameResult });
  }

  play(count) {
    const gameResult = [];
    const { cars } = this.state;
    for (let i = 0; i < count; i += 1) {
      const carNameDistanceMap = new Map();
      cars.forEach(car => {
        car.goForward();
        const { name, distance } = car.getCarInformaiton();
        carNameDistanceMap.set(name, distance);
      });
      gameResult.push(carNameDistanceMap);
    }
    return gameResult;
  }
}
