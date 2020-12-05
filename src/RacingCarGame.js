import CarNamesInput from './CarNamesInput.js';

export default class RacingCarGame {
  carNamesContainer = null;

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

    this.carNamesContainer = new CarNamesInput({
      target: _container,
    });

    _container.innerHTML += `
      <div class="hidden">
        <h4>시도할 횟수를 입력해주세요.</h4>
        <input type="number" id="racing-count-input" />
        <button id="racing-count-submit">확인</button>
      </div>
    `;

    target.appendChild(_container);
  }

  createResult(target) {
    const _result = document.createElement('div');
    _result.innerHTML = `<h4>📄 실행 결과</h4>`;
    _result.className = 'hidden';

    target.appendChild(_result);
  }
}
