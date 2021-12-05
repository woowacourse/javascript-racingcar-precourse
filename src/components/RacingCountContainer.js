import {DOM_ID, PROGRESS} from '../utils/constants.js';
import {hideElement, showElement} from '../utils/util.js';
import Component from './Component.js';

export default class RacingCountContainer extends Component {
  mounted() {
    this.$title = document.querySelector(`#${DOM_ID.RACING_COUNT_TITLE}`);
    this.toggleDisplayContainer();
  }

  setEvent() {}

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
