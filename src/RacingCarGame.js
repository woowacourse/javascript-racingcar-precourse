import CarNamesInput from './CarNamesInput.js';
import RacingCountInput from './RacingCountInput.js';
import GameResult from './GameResult.js';

export default class RacingCarGame {
  carNamesContainer = null;
  racingCountContainer = null;
  gameResult = null;

  constructor(target) {
    this.target = target;
    this.createHeader(target);
    this.createDescription(target);
    this.createCarGameContainer(target);
    this.createResult(target);
  }

  createHeader(target) {
    const _header = document.createElement('h1');
    _header.innerHTML = `🏎️ 자동차 경주 게임`;
    target.appendChild(_header);
  }

  createDescription(target) {
    const _description = document.createElement('p');
    _description.innerHTML = `
      자동차 이름을 <strong>5자 이하로</strong> 콤마로 구분하여 입력해주세요.
      <br />
      올바른 예) east,west,south,north <br />
    `;
    target.appendChild(_description);
  }

  createCarGameContainer(target) {
    const _container = document.createElement('div');
    _container.className = 'car-game-container';
    target.appendChild(_container);

    this.carNamesContainer = new CarNamesInput({
      target: _container,
      onClick: this.handleClickCarNamesSubmit.bind(this),
    });

    this.racingCountContainer = new RacingCountInput({
      target: _container,
    });
  }

  handleClickCarNamesSubmit() {
    this.racingCountContainer.show();
  }

  createResult(target) {
    this.gameResult = new GameResult(target);
  }
}
