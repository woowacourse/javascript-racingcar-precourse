import Component from '../core/Component.js';
import Car from '../core/Car.js';
import CarNamesForm from './CarNamesForm.js';
import RacingCountForm from './RacingCountForm.js';
import GameResult from './GameResult.js';
import { $, createElement } from '../utils/dom.js';
import { GAME_STATUS } from '../utils/constants.js';
import { moveCarAndGetDistances, getWinners } from '../utils/game.js';

export default class RacingCarGame extends Component {
  initDoms() {
    this.container = $('#app');
    this.container.appendChild(createElement('game-result'));
  }

  initState() {
    this.state = {
      cars: [],
      racingCount: 0,
      gameStatus: GAME_STATUS.NAMES_REQUIRED,
      gameResult: [],
      winners: [],
    };
  }

  initChildrens() {
    const { gameStatus, gameResult, winners } = this.state;
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
        winners,
      }),
    ];
  }

  onSubmitCarNames(names) {
    const cars = names.map(name => new Car(name));
    this.setState({ cars, gameStatus: GAME_STATUS.RACING_COUNT_REQUIRED });
  }

  onSubmitRacingCount(count) {
    const gameResult = this.play(count);
    const winners = getWinners(gameResult);
    this.setState({ count, gameStatus: GAME_STATUS.END, gameResult, winners });
  }

  play(count) {
    const gameResult = [];
    const { cars } = this.state;
    for (let i = 0; i < count; i += 1) {
      gameResult.push(moveCarAndGetDistances(cars));
    }
    return gameResult;
  }
}
