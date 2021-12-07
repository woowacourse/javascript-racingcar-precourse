import CarNamesForm from './CarNamesForm.js';
import RacingCountForm from './RacingCountForm.js';
import Car from '../model/Car.js';
import RacingGame from './RacingGame.js';

import { validator } from '../validation/validator.js';

export default class Controller {
  constructor(render) {
    this.$app = document.getElementById('app');
    this.$carNamesInput = document.getElementById('car-names-input');
    this.$carNamesSubmit = document.getElementById('car-names-submit');
    this.$racingCountInput = document.getElementById('racing-count-input');
    this.$racingCountSubmit = document.getElementById('racing-count-submit');

    this.render = render;

    this.carNamesForm = new CarNamesForm(
      this.$carNamesInput,
      this.$carNamesSubmit
    );
    this.racingCountForm = new RacingCountForm(
      this.$racingCountInput,
      this.$racingCountSubmit
    );

    this.carNames = [];
    this.racingCount = 0;

    this.bindCarNamesSubmitEvent();
    this.bindRacingCountSubmitEvent();
  }

  alertMessage = text => {
    if (!text) {
      return false;
    }

    alert(text);
    this.carNamesForm.initValue();
    this.carNames = [];

    return true;
  };

  checkCarName = ([...carNames]) => {
    // 각 carName 유효성 검사
    for (const carName of carNames) {
      const message = validator.validate('carName', carName);

      if (message) {
        return message;
      }
    }
  };

  checkDuplicate = ([...carNames]) => {
    return validator.validate('carNames', carNames);
  };

  onClickCarNamesSubmit = event => {
    event.preventDefault();

    // car-names-input 유효성 검사
    const invalidInputMessage = this.carNamesForm.validateInput();
    if (this.alertMessage(invalidInputMessage)) {
      return;
    }

    // 각 carName 유효성 검사
    const carNames = this.carNamesForm.getValue().split(',');
    const invalidCarNameMessage = this.checkCarName(carNames);
    if (this.alertMessage(invalidCarNameMessage)) {
      return;
    }

    // carName 중복 유효성 검사
    const carNameDuplicatedMessage = this.checkDuplicate(carNames);
    if (this.alertMessage(carNameDuplicatedMessage)) {
      return;
    }

    this.carNames = carNames;
    console.log(this.carNames);
  };

  onClickRacingCountSubmit = event => {
    event.preventDefault();

    if (this.carNames.length <= 0) {
      this.alertMessage('자동차 이름을 먼저 입력해주세요.');
      return;
    }

    const invalidInputMessage = this.racingCountForm.validateInput();
    if (this.alertMessage(invalidInputMessage)) {
      return;
    }

    this.racingCount = this.racingCountForm.getValue();
    console.log(this.racingCount);

    this.startGame();
  };

  bindCarNamesSubmitEvent = () => {
    this.$carNamesSubmit.addEventListener('click', this.onClickCarNamesSubmit);
  };

  bindRacingCountSubmitEvent = () => {
    this.$racingCountSubmit.addEventListener(
      'click',
      this.onClickRacingCountSubmit
    );
  };

  getResultString = (char, count) => {
    let result = '';
    for (let i = 0; i < count; i++) {
      result += char;
    }
    return result;
  };

  getWinnerString = winners => {
    let result = '';
    for (const winner of winners) {
      result += `${winner}, `;
    }
    return result.substring(0, result.length - 2);
  };

  getResultTemplate = gameResultData => {
    let template = '';

    for (let round = 0; round < gameResultData.length; round++) {
      for (let car = 0; car < gameResultData[0].length; car++) {
        const carData = gameResultData[round][car];
        const carName = carData.name;
        const resultString = this.getResultString('-', carData.distance);

        template += `<span>${carName}: ${resultString} </span><br />`;
      }
      template += `<br />`;
    }

    return template;
  };

  getWinnerTemplate = winners => {
    const winnerString = this.getWinnerString(winners);

    return `최종 우승자: <span id="racing-winners">${winnerString}</span>`;
  };

  renderGameResult = template => {
    const $div = document.createElement('div');
    this.render.template($div, this.$app, template);
  };

  renderWinners = template => {
    const $span = document.createElement('span');
    this.render.template($span, this.$app, template);
  };

  startGame = () => {
    let cars = [];
    for (const carName of this.carNames) {
      cars.push(new Car(carName));
    }

    const game = new RacingGame(cars, this.racingCount);
    const resultTemplate = this.getResultTemplate(game.getResult());
    const winnerTemplate = this.getWinnerTemplate(game.getWinners());

    this.renderGameResult(resultTemplate);
    this.renderWinners(winnerTemplate);
  };
}
