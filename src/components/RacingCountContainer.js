import {DOM_ID} from '../utils/constants.js';
import {showDisplayContainer} from '../utils/util.js';
import {isValidRacingCount} from '../utils/validation.js';
import Component from './Component.js';

export default class RacingCountContainer extends Component {
  setup() {
    this.$title = this.$props.$title;
    this.$input = this.$target.querySelector(`#${DOM_ID.RACING_COUNT_INPUT}`);
  }

  mounted() {
    showDisplayContainer(this.$target, this.$title);
  }

  setEvent() {
    this.addEvent('click', `#${DOM_ID.RACING_COUNT_SUBMIT}`, (event) => {
      event.preventDefault();

      const {onSubmit, initResult} = this.$props;
      const racingCount = this.$input.value;
      if (isValidRacingCount(this.$input, racingCount)) {
        onSubmit(racingCount);
        initResult();
      }
    });
  }
}
