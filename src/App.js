import Component from './components/Component.js';
import CarNamesContainer from './components/CarNamesContainer.js';
import RaicingCountContainer from './components/RacingCountContainer.js';
import {DOM_ID, PROGRESS} from './utils/constants.js';
import ResultContainer from './components/ResultContainer.js';

export default class App extends Component {
  setup() {
    this.$state = {
      names: [],
      count: 0,
      progress: PROGRESS.INPUT_CAR_NAME
    };

    this.$CarNamesContainer = this.$target.querySelector(`#${DOM_ID.CAR_NAMES_CONTAINER}`);
    this.$RaicingCountContainer = this.$target.querySelector(`#${DOM_ID.RACING_COUNT_CONTAINER}`);
    this.$ResultContainer = this.$target.querySelector(`#${DOM_ID.RESULT_CONTAINER}`);
  }

  template() {
    this.$target.insertAdjacentHTML('beforeend', `<div id=${DOM_ID.RESULT_CONTAINER}></div>`);
  }

  mounted() {
    new CarNamesContainer(this.$CarNamesContainer, {
      onSubmit: this.submitCarNameInputHandler.bind(this),
      onChange: this.changeProgressHandler.bind(this)
    });
    new RaicingCountContainer(this.$RaicingCountContainer, {
      progress: this.$state.progress,
      onSubmit: this.submitRacingCountInputHandler.bind(this),
      onChange: this.changeProgressHandler.bind(this)
    });
    new ResultContainer(this.$ResultContainer, {
      progress: this.$state.progress
    });
  }

  submitCarNameInputHandler(nameArr) {
    this.setState({
      names: nameArr
    });
  }

  changeProgressHandler(progress) {
    this.setState({
      progress
    });
  }

  submitRacingCountInputHandler(count) {
    this.setState({
      count
    });
  }
}
