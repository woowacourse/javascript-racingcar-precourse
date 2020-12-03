import {
  splitNamesString,
  compareDistance,
  isFiveUpper,
  isNames,
  isZero,
  isNumber,
} from '../../../utils';

export default class RacingCarView {
  constructor(
    RacingCarModel,
    carNamesInput,
    carNamesSubmitButtton,
    carRacingCountDiv,
    carRacingResultDiv,
  ) {
    this.RacingCarModel = RacingCarModel;
    this.carNamesInput = carNamesInput;
    this.carNamesSubmitButtton = carNamesSubmitButtton;
    this.carRacingCountDiv = carRacingCountDiv;
    this.carRacingResultDiv = carRacingResultDiv;
    this.init();
  }

  init() {
    this.carNamesSubmitButtton.addEventListener(
      'click',
      this.handleCarNamesSubmit.bind(this),
    );
  }

  handleCarNamesSubmit() {
    const splitedNames = splitNamesString(this.carNamesInput.value);
    console.log(splitedNames, 'splited');

    const exception = this.validNames(splitedNames);
    if (exception) {
      this.resetCarNamesInput();
      alert(exception);
      return;
    }

    this.RacingCarModel.makeCarInstances(splitedNames);
    this.renderCountInputAndSubmitButton();
  }

  handleRacingCountSubmit() {
    const racingCount = document.getElementById('#racing-count-input').value;
    const exception = this.validCount(racingCount);
    if (exception) {
      this.resetRacingCountInput();
      alert(exception);
      return;
    }

    this.renderResult(racingCount);
  }

  addEventListenerToRacingCountSubmitButton() {
    document
      .getElementById('#racing-count-submit')
      .addEventListener('click', this.handleRacingCountSubmit.bind(this));
  }

  validNames(names) {
    if (!isNames(names)) {
      return '공백이 아닌 자동차 이름을 입력해주세요.';
    }
    if (isFiveUpper(names)) {
      return '5자 이하의 자동차 이름을 입력해주세요.';
    }

    return '';
  }

  validCount(count) {
    if (!isNumber(count)) {
      return '숫자만 입력해주세요.';
    }
    if (isZero(count)) {
      return '1 이상의 수를 입력해주세요.';
    }
  }

  decideWinners(sortedCars) {
    const winnerDistance = sortedCars[0].moveForwardDistance;

    const winners = sortedCars.reduce((accumulator, car) => {
      if (car.moveForwardDistance === winnerDistance) {
        return accumulator.concat([car.name]);
      }

      return accumulator;
    }, []);

    return winners;
  }

  resetCarNamesInput() {
    this.carNamesInput.value = '';
  }

  resetRacingCountInput() {
    const racingCountInput = document.getElementById('#racing-count-input');
    racingCountInput.value = '';
  }

  renderCountInputAndSubmitButton() {
    this.carRacingCountDiv.innerHTML = `
      <h4>시도할 횟수를 입력해주세요.</h4>
      <input type="number" id="#racing-count-input"/>
      <button id="#racing-count-submit">확인</button>
    `;
    this.addEventListenerToRacingCountSubmitButton();
  }

  renderHeading() {
    this.carRacingResultDiv.innerHTML += `<h4>📄 실행 결과</h4>`;
  }

  renderIntermediateResult(cars) {
    let intermediateResult = ``;
    cars.forEach(car => {
      let hyphens = '-'.repeat(car.moveForwardDistance);
      intermediateResult += `<p class=".car-distance-p">${car.name} : ${hyphens}</p>`;
    });
    this.carRacingResultDiv.innerHTML += `
      <div>
        ${intermediateResult}
      </div>
    `;
  }

  renderWinners(cars) {
    const sortedCars = [...cars];
    sortedCars.sort(compareDistance);
    console.log(sortedCars, 'sorted');
    const winners = this.decideWinners(sortedCars);
    const winnersString = winners.join(', ');

    this.carRacingResultDiv.innerHTML += `
      <div>
        최종 우승자: ${winnersString}
      </div>
    `;
  }

  renderResult(racingCount) {
    this.renderHeading();

    for (let i = 0; i < racingCount; i++) {
      this.RacingCarModel.progress();
      this.renderIntermediateResult(this.RacingCarModel.getCars());
    }

    this.renderWinners(this.RacingCarModel.getCars());
  }
}
