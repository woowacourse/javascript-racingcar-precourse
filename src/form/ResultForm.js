import { $resultTitle } from '../constants/HTMLconstant.js';

export default class ResultForm {
  constructor() {
    this.title = $resultTitle;
  }

  hide() {
    this.title.style.display = 'none';
  }

  show(result) {
    this.title.style.display = '';
    this.title.insertAdjacentHTML('afterend', result);
  }
}
