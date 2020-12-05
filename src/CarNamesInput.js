export default class CarNamesInput {
  carNamesContainer = null;

  constructor({ target }) {
    this.target = target;
    this.createCarNamesContainer(target);
  }

  createCarNamesContainer(target) {
    const _carNamesContainer = document.createElement('div');
    _carNamesContainer.innerHTML = `
      <input type="text" id="car-names-input" />
      <button id="car-names-submit">확인</button>
    `;

    this.carNamesContainer = _carNamesContainer;
    target.appendChild(_carNamesContainer);
  }
}
