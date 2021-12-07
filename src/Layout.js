export default class Layout {
  constructor() {
    this.formTag = document.getElementsByTagName('form');
    this.titleTag = document.getElementsByTagName('h4');
    this.printRacingCarGameResult = document.createElement('div');
    document.body.appendChild(this.printRacingCarGameResult);
    this.printWinner = document.createElement('div');
    document.body.appendChild(this.printWinner);
    this.makeHiddenCountAndResultSection();
  }

  makeHiddenCountAndResultSection() {
    this.titleTag[0].style.visibility = 'hidden';
    this.formTag[1].style.visibility = 'hidden';
    this.titleTag[1].style.visibility = 'hidden';
    this.printRacingCarGameResult.style.visibility = 'hidden';
    this.printWinner.style.visibility = 'hidden';
  }

  makeVisibleCountSection() {
    document.getElementById('racing-count-input').value = '';
    this.titleTag[0].style.visibility = 'visible';
    this.formTag[1].style.visibility = 'visible';
    this.titleTag[1].style.visibility = 'hidden';
    this.printRacingCarGameResult.style.visibility = 'hidden';
    this.printWinner.style.visibility = 'hidden';
  }

  makeVisibleResultSection() {
    this.titleTag[1].style.visibility = 'visible';
    this.printRacingCarGameResult.style.visibility = 'visible';
    this.printWinner.style.visibility = 'visible';
  }

  static inputCarName() {
    return document.getElementById('car-names-input').value;
  }

  static inputCountString() {
    return document.getElementById('racing-count-input').value;
  }

  printMoveResult(moveResult) {
    this.printRacingCarGameResult.innerHTML = moveResult;
  }

  printWinnerResult(winner) {
    this.printWinner.innerHTML = `최종우승자: <span id="racing-winners">${winner}</span>`;
  }
}
