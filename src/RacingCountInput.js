export default class RacingCountInput {
  racingCountContainer = null;

  constructor({ target, onClick }) {
    this.target = target;
    this.createRacingCountContainer(target);
    this.addSubmitEvent(onClick);
    this.addKeyDownEventForPreventInvaildInputs();
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

  addKeyDownEventForPreventInvaildInputs() {
    const _vaildInputs = ['Backspace', 'Delete', 'Tab'];
    const handleKeyDown = (event) => {
      if (_vaildInputs.includes(event.key)) {
        return true;
      }
      return !isNaN(Number(event.key));
    };
    const _input = document.getElementById('racing-count-input');

    _input.onkeydown = handleKeyDown;
  }

  buttonDisable() {
    const _submit = document.getElementById('racing-count-submit');

    _submit.disabled = true;
  }

  show() {
    this.racingCountContainer.classList.toggle('hidden', false);
  }
}
