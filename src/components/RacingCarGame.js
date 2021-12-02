import Component from '../core/Component.js';
import Car from '../core/Car.js';
import CarNamesForm from './CarNamesForm.js';
import RacingCountForm from './RacingCountForm.js';
import { $ } from '../utils/dom.js';
import { GAME_STATUS } from '../utils/constants.js';

export default class RacingCarGame extends Component {
  initDoms() {
    this.container = $('#app');
  }

  initState() {
    this.state = {
      cars: [],
      racingCount: 0,
      gameStatus: GAME_STATUS.NAMES_REQUIRED,
    };
  }

  initChildrens() {
    const { gameStatus } = this.state;
    this.childrens = [
      new CarNamesForm({
        gameStatus,
        onSubmit: names => this.onSubmitCarNames(names),
      }),
      new RacingCountForm({
        gameStatus,
      }),
    ];
  }

  onSubmitCarNames(names) {
    const cars = names.map(name => new Car(name));
    this.setState({ cars, gameStatus: GAME_STATUS.RACING_COUNT_REQUIRED });
  }
}
