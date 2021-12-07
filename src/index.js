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
    this.$racingWinnersSpan.setAttribute('id', 'racing-winners');
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
    this.$racingWinnersSpan.innerText = this.#getWinnersString();

  }

  #getWinnersString() {
    let maxLoc = -1
    let winners = []

    for (let i = 0; i < this.carsList.length; i++) {
      const currCar = this.carsList[i];

      if (currCar.getLocation() > maxLoc){
        maxLoc = currCar.getLocation();
        winners = [currCar.getName()]
      }
      else if (currCar.getLocation() === maxLoc) winners.push(currCar.getName())
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
    } else {
      this.#showRacingCountElements();
    }
  }

  #onClickracingCountSubmitHandler(event){
    event.preventDefault();

    const userInput = this.$racingCountInput.value;
    if (isValidPositiveNumber(userInput)){
      const raceCount = parseInt(userInput);
      // simulate result here
      this.#simulateGame(raceCount);
    }else{
      alert(constants.COUNT_ERROR_MESSAGE);
    }
  }

  #createNewCars(carNamesInput){  
    const parsedCarNames = carNamesInput.split(',');
    const isValidInput = this.#isValidCarNamesList(parsedCarNames);

    if (isValidInput) this.carsList = parsedCarNames.map((name) => new Car(name));
    return isValidInput;
  }

  #isValidCarNamesList(carNamesList){
    return carNamesList.length > 1 && this.#isValidCarNamesLength(carNamesList);
  }

  #isValidCarNamesLength(carNamesList){
    return getMaxLengthOfStringList(carNamesList) <= this.carNameMaxLength && !carNamesList.includes('');
  }

  #simulateGame(raceCount){
    for (let i = 0; i < raceCount; i++){
      this.#simulateRound();
      this.#addResultString();
    }
    this.#showRacingResultElements();
  }

  #simulateRound(){
    this.carsList.forEach((car) => car.simulate());
  }

  #getSimulationRoundString(){
    return this.carsList.map((c) => c.toString()).join('<br/>') + '<br/><br/>';
  }

  #addResultString(){
    const str = this.#getSimulationRoundString();
    this.$racingStepsSpan.insertAdjacentHTML( 'beforeend', str );
  }
}

new RacingGame();

