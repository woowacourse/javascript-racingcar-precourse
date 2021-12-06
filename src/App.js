import Component from './components/Component.js';
import CarNamesContainer from './components/CarNamesContainer.js';
import RaicingCountContainer from './components/RacingCountContainer.js';
import {DOM_ID} from './utils/constants.js';
import ResultContainer from './components/ResultContainer.js';
import Car from './classes/Car.js';
import {hideAllElements} from './utils/util.js';
export default class App extends Component {
  constructor(...args) {
    super(...args);
    this.hideContainer();
  }

  setup() {
    this.$state = {
      cars: [],
      count: 0
    };

    this.$carNamesContainer = this.$target.querySelector(`#${DOM_ID.CAR_NAMES_CONTAINER}`);
    this.$raicingCountTitle = this.$target.querySelector(`#${DOM_ID.RACING_COUNT_TITLE}`);
    this.$raicingCountContainer = this.$target.querySelector(`#${DOM_ID.RACING_COUNT_CONTAINER}`);
    this.$resultContainer = this.$target.querySelector(`#${DOM_ID.RESULT_CONTAINER}`);
    this.$resultTitle = this.$target.querySelector(`#${DOM_ID.RESULT_TITLE}`);
  }

  template() {
    this.$target.insertAdjacentHTML('beforeend', `<div id=${DOM_ID.RESULT_CONTAINER}></div>`);
  }

  mounted() {
    new CarNamesContainer(this.$carNamesContainer, {
      onSubmit: this.submitCarNameInputHandler.bind(this),
      initRacingCount: this.mountRaicingCountContainer.bind(this)
    });
  }

  hideContainer() {
    hideAllElements([this.$raicingCountTitle, this.$raicingCountContainer, this.$resultTitle, this.$resultContainer]);
  }

  mountRaicingCountContainer() {
    new RaicingCountContainer(this.$raicingCountContainer, {
      $title: this.$raicingCountTitle,
      onSubmit: this.submitRacingCountInputHandler.bind(this),
      initResult: this.mountResultContainer.bind(this)
    });
  }

  mountResultContainer() {
    new ResultContainer(this.$resultContainer, {
      $title: this.$resultTitle,
      cars: this.$state.cars,
      count: this.$state.count
    });
  }

  submitCarNameInputHandler(nameArr) {
    const cars = nameArr.map((name) => new Car(name));
    this.setState({
      cars
    });
  }

  submitRacingCountInputHandler(count) {
    this.setState({
      count
    });
  }
}
