import Component from './Component.js';
import {isValidNamesInput} from '../utils/validation.js';
import {DOM_ID} from '../utils/constants.js';

export default class CarNamesContainer extends Component {
  mounted() {
    this.$input = this.$target.querySelector(`#${DOM_ID.CAR_NAMES_INPUT}`);
  }

  setEvent() {
    const {onSubmit, initRacingCount} = this.$props;

    this.addEvent('click', `#${DOM_ID.CAR_NAMES_SUBMIT}`, (event) => {
      event.preventDefault();

      const carNamesArr = this.$input.value.split(',');
      if (isValidNamesInput(this.$input, carNamesArr)) {
        onSubmit(carNamesArr);
        initRacingCount();
      }
    });
  }
}
