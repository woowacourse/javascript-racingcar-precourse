import Component from './components/Component.js';
import CarNamesContainer from './components/CarNamesContainer.js';
import RaicingCountContainer from './components/RacingCountContainer.js';
import {DOM_ID} from './utils/constants.js';

export default class App extends Component {
  setup() {
    this.$state = {
      names: []
    };
  }

  mounted() {
    const $CarNamesContainer = this.$target.querySelector(`#${DOM_ID.CAR_NAMES_CONTAINER}`);
    const $RaicingCountContainer = this.$target.querySelector(`#${DOM_ID.RACING_COUNT_CONTAINER}`);

    new CarNamesContainer($CarNamesContainer, {
      onSubmit: this.submitCarNameInputHandler.bind(this)
    });

    new RaicingCountContainer($RaicingCountContainer, {});
  }

  submitCarNameInputHandler(nameArr) {
    this.setState({
      names: nameArr
    });
  }
}
