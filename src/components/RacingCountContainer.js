import {DOM_ID, PROGRESS} from '../utils/constants.js';
import {hideElement, showElement} from '../utils/util.js';
import {isValidRacingCount} from '../utils/validation.js';
import Component from './Component.js';

export default class RacingCountContainer extends Component {
  mounted() {
    this.$title = document.querySelector(`#${DOM_ID.RACING_COUNT_TITLE}`);
    this.$input = this.$target.querySelector(`#${DOM_ID.RACING_COUNT_INPUT}`);
    this.toggleDisplayContainer();
  }

  setEvent() {
    const {onSubmit, onChange} = this.$props;

    this.addEvent('click', `#${DOM_ID.RACING_COUNT_SUBMIT}`, (event) => {
      event.preventDefault();
      const racingCount = this.$input.value;
      if (isValidRacingCount(this.$input, racingCount)) {
        onSubmit(racingCount);
        onChange(PROGRESS.PLAY);
      }
    });
  }

  toggleDisplayContainer() {
    if (this.$props.progress === PROGRESS.INPUT_CAR_NAME) {
      hideElement(this.$title);
      hideElement(this.$target);
    } else {
      showElement(this.$title);
      showElement(this.$target);
    }
  }
}
