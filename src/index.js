import checkCarName from './checkCarName.js';

export default class RacingCarGame {
  constructor() {
    document.getElementById('car-names-submit').onclick =
      this.onCarNameInputSubmit.bind(this);
    document.getElementById('racing-count-submit').onclick =
      this.onCountInputSubmit.bind(this);
    this.formTag = document.getElementsByTagName('form');
    this.titleTag = document.getElementsByTagName('h4');
    this.makeHiddenCountAndResultSection();
  }

  makeHiddenCountAndResultSection() {
    this.titleTag[0].style.visibility = 'hidden';
    this.formTag[1].style.visibility = 'hidden';
    this.titleTag[1].style.visibility = 'hidden';
  }

  makeVisibleCountSection() {
    this.titleTag[0].style.visibility = 'visible';
    this.formTag[1].style.visibility = 'visible';
  }

  onCarNameInputSubmit(e) {
    e.preventDefault();
    const inputCarNames = document.getElementById('car-names-input').value;
    this.carName = inputCarNames.split(',');
    if (!checkCarName(this.carName)) {
      alert('자동차 이름 입력이 올바르지 않습니다. 다시 입력해주세요.');
      this.makeHiddenCountAndResultSection();
    } else {
      this.makeVisibleCountSection();
    }
  }

  onCountInputSubmit(e) {
    e.preventDefault();
    const inputCountString =
      document.getElementById('racing-count-input').value;
    if (inputCountString.length === 0) {
      alert('시도할 횟수 입력이 올바르지 않습니다. 숫자로 입력해주세요.');
    } else {
      const inputCount = Number(inputCountString);
    }
  }
}

const player = new RacingCarGame();
