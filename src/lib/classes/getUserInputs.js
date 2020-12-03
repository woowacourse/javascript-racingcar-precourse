import InputsControl from '/src/lib/classes/checkUserInputs.js';

import {
  showContainer,
  disableInputs,
} from '/src/lib/config/manipulateContainers.js';

export default class UserInputs {
  constructor() {
    this.$carNamesInput = document.getElementById('car-names-input');
    this.$carNamesSubmit = document.getElementById('car-names-submit');
    this.$racingCountContainer = document.getElementById('racing-count-container');
    this.$racingCountInput = document.getElementById('racing-count-input');
    this.$racingCountSubmit = document.getElementById('racing-count-submit');
  }

  inputDataInRacingCarGame(carNames, racingCount) {
    console.log(carNames, racingCount);
  }

  checkRacingCountInput(racingCountInputData) {
    const {
      goToNextStep,
      message,
      inputData
    } = racingCountInputData.getResultOfRacingCountNumber(this.$racingCountInput);
  
    if(goToNextStep) {
      disableInputs(this.$racingCountInput, this.$racingCountSubmit);
      this.racingCount = inputData;
      return this.inputDataInRacingCarGame(this.carNames, inputData)
    }
  
    this.$racingCountInput.value = '';
    return alert(message);
  }

  userInputRacingCount() {
    this.$racingCountSubmit.addEventListener('click', () => this.checkRacingCountInput(
      new InputsControl(this.$racingCountInput.value),
    ));
  }

  submitCarNamesInput(carNames) {
    showContainer(this.$racingCountContainer);
    this.carNames = carNames;
    return this.userInputRacingCount();
  }

  checkCarNamesInput(carNamesInputData) {
    const {
      goToNextStep,
      message,
      inputData
    } = carNamesInputData.getResultOfCarNamesInput(this.$carNamesInput);
  
    if(goToNextStep) {
      disableInputs(this.$carNamesInput, this.$carNamesSubmit);
      return this.submitCarNamesInput(inputData);
    }
  
    this.$carNamesInput.value = '';
    return alert(message);
  }

  userInputCarNames() {  
    this.$carNamesSubmit.addEventListener('click', () => this.checkCarNamesInput(
      new InputsControl(this.$carNamesInput.value)
    ));
  }

}