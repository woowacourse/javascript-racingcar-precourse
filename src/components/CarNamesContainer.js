import Component from './Component.js';
import {isVaildNamesInput} from '../utils/validation.js';
import {DOM_ID, PROGRESS} from '../utils/constants.js';

export default class CarNamesContainer extends Component {
  mounted() {
    this.$input = this.$target.querySelector(`#${DOM_ID.CAR_NAMES_INPUT}`);
  }

  setEvent() {
    const {onSubmit, onChange} = this.$props;

    this.addEvent('click', `#${DOM_ID.CAR_NAMES_SUBMIT}`, (event) => {
      event.preventDefault();
      const carNamesArr = this.$input.value.split(',');
      if (isVaildNamesInput(this.$input, carNamesArr)) {
        onSubmit(carNamesArr);
        onChange(PROGRESS.INPUT_RACING_COUNT);
      }
    });
  }
}
