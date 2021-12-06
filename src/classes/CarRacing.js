import { changeDistanceToBar } from '../utils.js';

export default class CarRacing {
  constructor(cars) {
    this.cars = cars;
    this.template = new Template();
  }

  play(count) {
    const racingResults = this.start(count);
    const eachResultTemplate = this.printRacingResult(racingResults);
    const finalWinnerTemplate = this.printFinalWinner(racingResults[count - 1]);
    return eachResultTemplate + finalWinnerTemplate;
  }

  start(count) {
    const eachCountResults = [];

    for (let i = 0; i < count; i += 1) {
      const eachCarResult = this.cars.map((car) => {
        car.drive();
        // 인스턴스 car를 리턴하면 주소 자체를 리턴하기 때문에 결국에는 각 횟수마다 모두 같은 distance를 리턴하게 된다.
        // 그러므로 얕은 복사를 통해 각 레이싱 결과를 리턴해야한다.
        // reference : https://stackoverflow.com/questions/41474986/how-to-clone-a-javascript-es6-class-instance
        return Object.assign(Object.create(Object.getPrototypeOf(car)), car);
      });
      eachCountResults.push(eachCarResult);
    }
    return eachCountResults;
  }

  printRacingResult(racingResults) {
    const eachResultTemplate = this.template.getEachResult(racingResults);
    return eachResultTemplate;
  }

  printFinalWinner(arr) {
    const max = Math.max(...arr.map((car) => car.distance));
    const winners = arr
      .filter((car) => car.distance === max)
      .map((car) => car.name);
    const finalWinnerTemplate = this.template.getFinalWinner(winners);
    return finalWinnerTemplate;
  }
}

class Template {
  getEachResult(data = []) {
    return `<div>${data
      .map(
        (eachResult) => `<ul style="list-style: none; padding: 0;">
        ${eachResult.map(this.getCarDistance).join('')}
      </ul>`,
      )
      .join('')}
    </div>`;
  }

  getCarDistance({ name, distance }) {
    return `<li>
      ${name}: ${changeDistanceToBar(distance).join('')}
    </li>`;
  }

  getFinalWinner(data = []) {
    return `<div>
      <span>최종 우승자: </span>
      <span id="racing-winners">${data.join(', ')}</span>
    </div>`;
  }
}
