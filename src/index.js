export default class RacingCarGame {
  constructor() {
    this.setEvent();
    this.blockRacingCountForm();
  }
  setEvent = () => {
    const $carNameForm = document
      .querySelector("#car-names-input")
      .closest("form");
    $carNameForm.addEventListener("submit", this.setCarNameSubmitEvent);
  };

  setCarNameSubmitEvent = (event) => {
    event.preventDefault();
    const $carNameInput = document.querySelector("#car-names-input");
    const carNames = $carNameInput.value.split(",");
    console.log(carNames);
    this.permitRacingCountForm();
  };

  blockRacingCountForm = () => {
    const $racingCountInput = document.querySelector("#racing-count-input");
    const $racingCountButton = document.querySelector("#racing-count-submit");
    $racingCountInput.disabled = true;
    $racingCountButton.disabled = true;
  };

  permitRacingCountForm = () => {
    const $racingCountInput = document.querySelector("#racing-count-input");
    const $racingCountButton = document.querySelector("#racing-count-submit");
    $racingCountInput.disabled = false;
    $racingCountButton.disabled = false;
  };
}

new RacingCarGame();
