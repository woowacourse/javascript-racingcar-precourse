export default class RacingCountInput {
  racingCountContainer = null;

  constructor({ target, onClick }) {
    this.target = target;
    this.createRacingCountContainer(target);
    this.addSubmitEvent(onClick);
  }

  createRacingCountContainer(target) {
    const _racingCountContainer = document.createElement('div');
    _racingCountContainer.className = 'hidden';
    _racingCountContainer.innerHTML = `
      <h4>시도할 횟수를 입력해주세요.</h4>
      <input type="number" id="racing-count-input" />
      <button id="racing-count-submit">확인</button>
    `;

    this.racingCountContainer = _racingCountContainer;
    target.appendChild(_racingCountContainer);
  }

  addSubmitEvent(onClick) {
    const _submit = document.getElementById('racing-count-submit');

    _submit.addEventListener('click', onClick);
  }

  show() {
    this.racingCountContainer.classList.toggle('hidden', false);
  }
}
