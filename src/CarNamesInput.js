export default class CarNamesInput {
  carNamesContainer = null;

  constructor({ target, onClick }) {
    this.target = target;
    this.createCarNamesContainer(target);
    this.addSubmitEvent(onClick);
  }

  createCarNamesContainer(target) {
    const _carNamesContainer = document.createElement('div');
    _carNamesContainer.innerHTML = `
      <input type="text" id="car-names-input" />
      <button id="car-names-submit">확인</button>
    `;

    target.appendChild(_carNamesContainer);
  }

  addSubmitEvent(onClick) {
    const _submit = document.getElementById('car-names-submit');

    _submit.addEventListener('click', onClick);
  }
}
