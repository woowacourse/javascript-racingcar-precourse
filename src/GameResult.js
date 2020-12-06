export default class GameResult {
  constructor(target) {
    this.target = target;
    this.createHeader(target);
  }

  createHeader(target) {
    const _container = document.createElement('div');
    _container.className = 'result hidden';
    _container.innerHTML = `<h4>📄 실행 결과</h4>`;

    this.container = _container;
    target.appendChild(_container);
  }

  show() {
    this.container.classList.toggle('hidden', false);
  }
}
