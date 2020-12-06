import Car from './Car.js';
import { createNewElement, setDisabled } from './utils.js';
  
export default class RacingCarGame {
  constructor() {
    this.cars = [];
    this.el = {
      carGameContainer: document.querySelector('.car-game-container'),
      carNamesForm: document.querySelector('#car-names-form'),
      carNamesInput: document.querySelector('#car-names-input'),
      carNamesSubmit: document.querySelector('#car-names-submit'),
    };
    this.setEventListener();
  }

  setEventListener() {
    this.el.carNamesForm.addEventListener('submit', this.handleSubmitCarNames.bind(this));
  }

  handleSubmitCarNames(e) {
    const validateInput = (data) => {
      return !data.some((item) => item.length > 0 && item.length > 5);
    };

    const disableForm = () => {
      setDisabled(this.el.carNamesInput);
      setDisabled(this.el.carNamesSubmit);
      this.el.carNamesForm.removeEventListener('submit', this.getCarNames);
    };

    e.preventDefault();

    if (this.cars.length > 0) {
      return;
    }

    const inputedData = this.el.carNamesInput.value.split(',');

    if (!validateInput(inputedData)) {
      return;
    }

    inputedData.forEach((item) => {
      this.cars.push(new Car(item));
    });

    disableForm();
    this.showRacingCountForm();
  }

  showRacingCountForm() {
    const racingCountFormEl = createNewElement('form', 'racing-count-form');
    racingCountFormEl.innerHTML = `
      <h4>시도할 횟수를 입력해주세요.</h4>
      <input type="number" id="racing-count-input" autofocus/>
      <button id="racing-count-submit">확인</button>
    `;

    this.el.carGameContainer.appendChild(racingCountFormEl);
  }
}

new RacingCarGame();
