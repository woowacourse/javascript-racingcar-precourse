import {DOM_ID, PROGRESS} from '../utils/constants.js';
import {hideElement, showElement} from '../utils/util.js';
import Component from './Component.js';

export default class ResultContainer extends Component {
  mounted() {
    this.$title = document.querySelector(`#${DOM_ID.RESULT_TITLE}`);
    this.toggleDisplayContainer();
  }

  setEvent() {}

  toggleDisplayContainer() {
    if (this.$props.progress !== PROGRESS.PLAY) {
      hideElement(this.$title);
      hideElement(this.$target);
    } else {
      showElement(this.$title);
      showElement(this.$target);
    }
  }
}
