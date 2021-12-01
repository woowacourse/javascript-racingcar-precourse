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
    const alertMessage = this.createCarNameAlertMessage(carNames);

    if (alertMessage) {
      alert(alertMessage);
      return;
    }
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

  isDuplicatedCarName = (carNames) => {
    return [...new Set(carNames)].length !== carNames.length;
  };

  hasEmpty = (carNames) => {
    return carNames.some((carName) => carName === "");
  };

  isInvalidCarNameLength = (carNames) => {
    return carNames.some((carName) => carName.length > 5);
  };

  hasSpace = (carNames) => {
    return carNames.some((carName) => carName.match(/[" "]/));
  };

  createCarNameAlertMessage = (carNames) => {
    if (this.isDuplicatedCarName(carNames)) {
      return "이름이 중복되었습니다";
    }
    if (this.hasEmpty(carNames)) {
      return "이름은 공백이 될수 없습니다";
    }
    if (this.isInvalidCarNameLength(carNames)) {
      return "이름은 5글자이하로 입력해주세요";
    }
    if (this.hasSpace(carNames)) {
      return "이름에 공백이 포함되서는 안됩니다";
    }

    return "";
  };
}

new RacingCarGame();
