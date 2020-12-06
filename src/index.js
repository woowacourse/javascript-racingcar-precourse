import Car from './Car.js';
import { createNewElement, setDisabled } from './utils.js';

export default class RacingCarGame {
  constructor() {
    this.cars = [];
    this.racingCount = 0;
    this.resetEl();
    this.setEventListener();
  }

  resetEl() {
    this.el = {
      carGameContainer: document.querySelector('.car-game-container'),
      carNamesForm: document.querySelector('#car-names-form'),
      carNamesInput: document.querySelector('#car-names-input'),
      carNamesSubmit: document.querySelector('#car-names-submit'),
      racingCountForm: document.querySelector('#racing-count-form'),
      racingCountInput: document.querySelector('#racing-count-input'),
      racingCountSubmit: document.querySelector('#racing-count-submit'),
    };
  }

  setEventListener() {
    const handleSubmitCarNames = (e) => {
      e.preventDefault();
      this.setCarNames();
    };

    this.el.carNamesForm.addEventListener('submit', handleSubmitCarNames);
  }

  setCarNames() {
    const validateInput = (data) => {
      return !data.some((item) => item.length > 0 && item.length > 5);
    };

    const disableForm = () => {
      setDisabled(this.el.carNamesInput);
      setDisabled(this.el.carNamesSubmit);
    };

    if (this.cars.length > 0) {
      return;
    }

    const carNames = this.el.carNamesInput.value.split(',');

    if (!validateInput(carNames)) {
      alert('잘못된 형식으로 입력되었습니다.');
      return;
    }

    carNames.forEach((item) => {
      this.cars.push(new Car(item));
    });

    disableForm();
    this.showRacingCountForm();
  }

  showRacingCountForm() {
    const handleSubmitRacingCount = (e) => {
      e.preventDefault();

      this.setRacingCount();
    };

    const racingCountFormEl = createNewElement('form', 'racing-count-form');
    racingCountFormEl.innerHTML = `
      <h4>시도할 횟수를 입력해주세요.</h4>
      <input type="number" id="racing-count-input" min="0" />
      <button id="racing-count-submit">확인</button>
    `;

    this.el.carGameContainer.appendChild(racingCountFormEl);
    this.resetEl();

    this.el.racingCountInput.focus();
    this.el.racingCountForm.addEventListener('submit', handleSubmitRacingCount);
  }

  setRacingCount() {
    this.racingCount = this.el.racingCountInput.value;
    this.showFinalResult();
  }

  showFinalResult() {
    const getHyphenLineByNumber = (count) => {
      let lineString = '';

      for (let i = 0; i < count; i++) {
        lineString += '-';
      }

      return lineString;
    };

    const getResultElement = () => {
      const resultEl = createNewElement('p');

      this.cars.forEach((car) => {
        car.moveForwardRandomly(this.racingCount);

        const carEl = createNewElement('div', null);
        carEl.innerHTML = `${car.name}: ${getHyphenLineByNumber(car.forwardCount)}`;

        resultEl.appendChild(carEl);
      });

      return resultEl;
    };

    const finalResultEl = createNewElement('div', 'final-result');
    finalResultEl.innerHTML = `<h4>📄 실행 결과</h4>`;

    for (let i = 0; i < this.racingCount; i++) {
      const resultEl = getResultElement();
      finalResultEl.appendChild(resultEl);
    }

    this.el.carGameContainer.appendChild(finalResultEl);
    this.showWinners();
  }

  showWinners() {
    const getWinners = () => {
      let winners = [];
      let maxForwardCount = 0;

      this.cars.forEach((car) => {
        if (car.forwardCount > maxForwardCount) {
          maxForwardCount = car.forwardCount;
          winners = [car];
        } else if (car.forwardCount === maxForwardCount) {
          winners.push(car);
        }
      });

      return winners;
    };

    const winners = getWinners();
    const winnersEl = createNewElement('p');
    winnersEl.innerHTML = `최종 우승자: `;

    winners.forEach((winner, index) => {
      winnersEl.innerHTML += `
        ${winner.name}${winners.length > index + 1 ? ',' : ''}
      `;
    });

    this.el.carGameContainer.appendChild(winnersEl);
  }
}

new RacingCarGame();
