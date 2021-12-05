import Component from './components/Component.js';
import CarNamesContainer from './components/CarNamesContainer.js';

export default class App extends Component {
  setup() {
    this.$state = {
      names: []
    };
  }

  mounted() {
    const $CarNamesContainer = this.$target.querySelector(`#car-names-container`);

    new CarNamesContainer($CarNamesContainer, {
      onSubmit: this.submitCarNameInputHandler.bind(this)
    });
  }

  submitCarNameInputHandler(nameArr) {
    this.setState({
      names: nameArr
    });
  }
}
