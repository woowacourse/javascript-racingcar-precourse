import {
  splitNamesString,
  compareDistance,
  isFiveUpper,
  isNames,
  isZero,
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

    for (let i = 0; i < racingCount; i++) {
      this.RacingCarModel.progress();
      this.renderIntermediateResult(this.RacingCarModel.getCars());
    }
    console.log(this.RacingCarModel.getCars());
    this.renderWinners(this.RacingCarModel.getCars());
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

  renderCountInputAndSubmitButton() {
    this.carRacingCountDiv.innerHTML = `
      <h4>시도할 횟수를 입력해주세요.</h4>
      <input type="number" id="#racing-count-input"/>
      <button id="#racing-count-submit">확인</button>
    `;
    this.addEventListenerToRacingCountSubmitButton();
  }

  renderIntermediateResult(cars) {
    let intermediateResult = ``;
    cars.forEach(car => {
      let hyphens = '-'.repeat(car.moveForwardDistance);
      intermediateResult += `<p>${car.name} : ${hyphens}</p>`;
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
}
