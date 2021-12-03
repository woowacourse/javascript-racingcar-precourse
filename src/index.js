import Car from './components/car.js';
import { getMaxLengthOfStringList } from './functions/index.js';
import constants from './constants/index.js';

class RacingGame {
  constructor() {
    this.carsList = [];
    this.carNameMaxLength = constants.MAX_CAR_NAME_LENGTH;
    this.#initElements();
  }

  #initElements() {
    this.$carNamesInput = document.getElementById('car-names-input');
    this.$carNamesSubmitButton = document.getElementById('car-names-submit');
    this.$racingCountInput = document.getElementById('racing-count-input');
    this.$racingCountSubmitButton = document.getElementById('racing-count-submit');
    this.#initSpans();
    this.#addOnClickEventListeners();
  }

  #initSpans() {
    const appDiv = document.getElementById('app')

    this.$racingStepsSpan = document.createElement('span');
    this.$racingStepsSpan.setAttribute('id', 'racing-steps');
    appDiv.appendChild(this.$racingStepsSpan);

    this.$racingWinnersSpan = document.createElement('span');
    this.$racingWinnersSpan.setAttribute('id', 'racing-winners');
    appDiv.appendChild(this.$racingWinnersSpan);
  }

  #addOnClickEventListeners() {
    this.$carNamesSubmitButton.addEventListener('click', this.#onClickCarNamesSubmitHandler.bind(this));

  }

  #onClickCarNamesSubmitHandler(event) {
    event.preventDefault();

    const userInput = this.$carNamesInput.value;
    const created = this.#createNewCars(userInput);
    if (!created) {
      alert("Invalid Input: Follow the input format");
    }
    console.log(this.carsList);
  }

  #createNewCars(carNamesInput){  
    const parsedCarNames = carNamesInput.split(',');
    const isValidInput = this.#isValidCarNamesList(parsedCarNames);

    if (isValidInput) this.carsList = parsedCarNames.map((name) => new Car(name));
    return isValidInput;
  }

  #isValidCarNamesList(carNamesList){
    return parsedCarNames.length > 1 && this.#isValidCarNamesLength(parsedCarNames);
  }

  #isValidCarNamesLength(carNamesList){
    return getMaxLengthOfStringList(carNamesList) <= this.carNameMaxLength && !carNamesList.includes('');
  }
}

new RacingGame();

