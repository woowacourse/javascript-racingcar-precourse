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

  renderRacing(carNamesArray, racerPositions) {
    const createCarRacingList = (name, index) => (
      `<li>${name}: ${racerPositions[index]}</li>`
    );

    this.container.innerHTML += `
      <ul>${carNamesArray.map(createCarRacingList).join('')}</ul>
    `;
  }

  renderWinners(cars) {
    const _distances = cars.map((car) => car.racingDistance);
    const _maxDistance = Math.max(..._distances);
    const findWinner = (names, car) => {
      if (car.racingDistance === _maxDistance) {
        names.push(car.name);
      }
      return names;
    };
    const _winners = cars.reduce(findWinner, []);

    this.container.innerHTML += `최종 우승자: ${_winners.join(', ')}`;
  }

  show() {
    this.container.classList.toggle('hidden', false);
  }
}
