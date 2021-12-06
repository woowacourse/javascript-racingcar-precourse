import { INPUT_GUIDE_MESSAGE, INPUT_GUIDE_COLOR } from './constants/index.js';

export default class InputGuide {
  constructor(ID) {
    this.guideContainer = document.querySelector(`#${ID}-guide`);
  }

  setVerified() {
    this.guideContainer.innerText = INPUT_GUIDE_MESSAGE.VERIFIED;
    this.guideContainer.setAttribute('style', `color: ${INPUT_GUIDE_COLOR.VERIFIED}`);
  }

  setUnverified() {
    this.guideContainer.innerText = INPUT_GUIDE_MESSAGE.UNVERIFIED;
    this.guideContainer.setAttribute('style', `color: ${INPUT_GUIDE_COLOR.UNVERIFIED}`);
  }
}
