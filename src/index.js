/* eslint-disable import/extensions */
/* eslint-disable no-alert */
import Car from './components/car.js';
import { getMaxLengthOfStringList, isValidPositiveNumber } from './functions/index.js';
import constants from './constants/index.js';

class RacingGame {
  constructor() {
    this.carsList = [];
    this.carNameMaxLength = constants.MAX_CAR_NAME_LENGTH;
    this.#initElements();
    this.#hideUnusedElements();
    this.#addOnClickEventListeners();
  }

  #initElements() {
    this.$appDiv = document.getElementById('app');
    this.$carNamesInput = document.getElementById('car-names-input');
    this.$carNamesSubmitButton = document.getElementById('car-names-submit');
    this.$racingCountInput = document.getElementById('racing-count-input');
    this.$racingCountSubmitButton = document.getElementById('racing-count-submit');
    this.$racingCountTitle = document.getElementById('racing-count-title');
    this.$racingResultTitle = document.getElementById('racing-result-title');
    this.#addResultSpanElements();
  }

  #addResultSpanElements() {
    this.$racingStepsSpan = document.createElement('span');
    this.$racingStepsSpan.setAttribute('id', 'racing-steps');
    this.$appDiv.appendChild(this.$racingStepsSpan);

    this.$racingWinnersSpan = document.createElement('span');
    this.$racingWinnersSpan.setAttribute('id', 'racing-result');
    this.$appDiv.appendChild(this.$racingWinnersSpan);
  }

  #hideUnusedElements() {
    this.$racingCountInput.style.display = 'none';
    this.$racingCountSubmitButton.style.display = 'none';
    this.$racingCountTitle.style.display = 'none';
    this.$racingResultTitle.style.display = 'none';
    this.$racingStepsSpan.style.display = 'none';
    this.$racingWinnersSpan.style.display = 'none';
  }

  #showRacingCountElements() {
    this.$racingCountInput.style.display = '';
    this.$racingCountSubmitButton.style.display = '';
    this.$racingCountTitle.style.display = '';
  }

  #showRacingResultElements() {
    this.$racingResultTitle.style.display = '';
    this.$racingStepsSpan.style.display = '';
    this.$racingWinnersSpan.style.display = '';
    this.$racingWinnersSpan.innerHTML = `최종 우승자: <span id='racing-winners'>${this.#getWinnersString()}<span/>`;
  }

  #getWinnersString() {
    let maxLoc = -1;
    let winners = [];

    for (let i = 0; i < this.carsList.length; i += 1) {
      const currCar = this.carsList[i];

      if (currCar.getLocation() > maxLoc) {
        maxLoc = currCar.getLocation();
        winners = [currCar.getName()];
      } else if (currCar.getLocation() === maxLoc) winners.push(currCar.getName());
    }
    return winners.join(', ');
  }

  #addOnClickEventListeners() {
    this.$carNamesSubmitButton.addEventListener('click', this.#onClickCarNamesSubmitHandler.bind(this));
    this.$racingCountSubmitButton.addEventListener('click', this.#onClickracingCountSubmitHandler.bind(this));
  }

  #onClickCarNamesSubmitHandler(event) {
    event.preventDefault();

    const userInput = this.$carNamesInput.value;
    const created = this.#createNewCars(userInput);
    if (!created) {
      alert(constants.INPUT_ERROR_MESSAGE);
      this.#hideUnusedElements();
    } else {
      this.#showRacingCountElements();
    }
  }

  #onClickracingCountSubmitHandler(event) {
    event.preventDefault();

    const userInput = this.$racingCountInput.value;
    if (isValidPositiveNumber(userInput)) {
      const raceCount = parseInt(userInput, 10);
      this.#simulateGame(raceCount);
    } else {
      alert(constants.COUNT_ERROR_MESSAGE);
    }
  }

  #resetGame() {
    this.$racingStepsSpan.innerText = '';
    this.#resetCarLocations();
  }

  #resetCarLocations() {
    this.carsList.forEach((car) => car.setLocation(0));
  }

  /**
   *
   * @param {String} carNamesInput 유저의 입력값
   * @returns {Boolean} 유저 입력값이 조건에 부합하고 this.carsList 생성됬을 경우 true.
   */
  #createNewCars(carNamesInput) {
    const parsedCarNames = carNamesInput.split(',');
    const isValidInput = this.#isValidCarNamesList(parsedCarNames);

    if (isValidInput) this.carsList = parsedCarNames.map((name) => new Car(name));
    return isValidInput;
  }

  #isValidCarNamesList(carNamesList) {
    return carNamesList.length > 1 && this.#isValidCarNamesLength(carNamesList);
  }

  /**
   *
   * @summary 리스트 안에 이름 길이가 1 이상이고 5 이하인지 확인.
   * @param {[String]} carNamesList 자동차 이름 리스트
   * @returns {Boolean}
   */
  #isValidCarNamesLength(carNamesList) {
    return getMaxLengthOfStringList(carNamesList) <= this.carNameMaxLength && !carNamesList.includes('');
  }

  #simulateGame(raceCount) {
    this.#resetGame(); // 게임을 다시 시작할 경우를 고려한 초기화

    for (let i = 0; i < raceCount; i += 1) {
      this.#simulateRound();
      this.#addResultString();
    }

    this.#showRacingResultElements();
  }

  #simulateRound() {
    this.carsList.forEach((car) => car.simulate());
  }

  #getSimulationRoundString() {
    return `${this.carsList.map((c) => c.toString()).join('<br/>')}<br/><br/>`;
  }

  #addResultString() {
    const str = this.#getSimulationRoundString();
    this.$racingStepsSpan.insertAdjacentHTML('beforeend', str);
  }
}
// eslint-disable-next-line no-new
new RacingGame();
