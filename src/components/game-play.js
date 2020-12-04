import Component from '../library/core/component.js';
import { createBarsByNumber } from '../library/utils/bar.js';

class GamePlay extends Component {
  constructor($target, props) {
    super($target, props);
    props.gameData.subscribe(this.render);
  }

  render = () => {
    const { racingCount, cars } = this._props.gameData.value;
    this._$target.innerHTML = this.createHeaderTemplate();
    for (let i = 0; i < racingCount; i++) {
      this._$target.innerHTML += this.createRaceTemplate(cars);
    }
    this._$target.innerHTML += this.createWinnerTemplate(cars);
  };

  createHeaderTemplate = () => {
    return '<h4>📄 실행 결과</h4>';
  };

  createRaceTemplate = cars => {
    let result = '<div class="race">';
    let drivenDistance;
    cars.forEach(car => {
      car.drive();
      drivenDistance = car.getDrivenDistance();
      result += `<div>${car.name}: ${createBarsByNumber(drivenDistance)}<div>`;
    });
    result += '</div>';
    return result;
  };

  createWinnerTemplate = cars => {
    console.log(this.getWinners(cars));
    const winners = this.getWinners(cars)
      .map(car => car.name)
      .join(', ');

    return `<div>최종 우승자: ${winners} </div>`;
  };

  getWinners = cars => {
    let maxDrivenDistance = -Infinity;
    cars.forEach(car => {
      console.log(car);
      if (car.getDrivenDistance() > maxDrivenDistance) {
        maxDrivenDistance = car.getDrivenDistance();
      }
    });

    return cars.filter(car => car.getDrivenDistance() === maxDrivenDistance);
  };
}

export default GamePlay;
