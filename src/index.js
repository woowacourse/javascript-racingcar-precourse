import Car from "./car.js";

export default function RacingGame() {
  const carNamesInput = document.getElementById("car-names-input");
  const carNamesSubmitButton = document.getElementById("car-names-submit");
  const racingCountInput = document.getElementById("racing-count-input");
  const racingCountSubmitButton = document.getElementById(
    "racing-count-submit"
  );

  const getCarNames = () => {
    const carNames = carNamesInput.value;
    const carNamesList = carNames.split(",").map((carName) => carName.trim());

    return carNamesList;
  };

  const isValidLength = (carName) => {
    if (carName.length > 5 || carName.length < 1) {
      return false;
    }

    return true;
  };

  const isEmpty = (carName) => {
    if (!carName) {
      return true;
    }

    return false;
  };

  const isDuplicate = (carNames) => {
    const carNamesSet = new Set(carNames);

    if (carNames.length !== carNamesSet.size) {
      return true;
    }

    return false;
  };

  const isLessThanTwoCars = (carNames) => {
    if (carNames.length < 2) {
      return true;
    }

    return false;
  };

  const isValidCarName = (carNames) => {
    if (isDuplicate(carNames)) {
      return false;
    }
    if (isLessThanTwoCars(carNames)) {
      return false;
    }
    for (const carName of carNames) {
      if (isEmpty(carName)) {
        return false;
      }
      if (!isValidLength(carName)) {
        return false;
      }
    }

    return true;
  };

  const getErrorMessage = (carNames) => {
    if (isDuplicate(carNames)) {
      return "중복된 이름이 있습니다.";
    }
    if (isLessThanTwoCars(carNames)) {
      return "2개 이상의 이름을 입력해주세요.";
    }
    for (const carName of carNames) {
      if (isEmpty(carName)) {
        return "공백인 이름이 있습니다.";
      }
      if (!isValidLength(carName)) {
        return "이름을 5자 이하로 입력해주세요.";
      }
    }
  };

  const initInput = (input) => {
    input.value = "";
    input.focus();
  };

  const getRacingCountNumber = () => {
    const racingCount = racingCountInput.value;
    const racingCountNumber = Number(racingCount);

    return racingCountNumber;
  };

  const isValidRacingCount = (racingCount) => {
    if (racingCount < 1) {
      return false;
    }
    if (!Number.isInteger(racingCount)) {
      return false;
    }

    return true;
  };

  const onClickCarNamesSubmitButton = (event) => {
    event.preventDefault();
    const carNamesList = getCarNames();

    if (!isValidCarName(carNamesList)) {
      alert(getErrorMessage(carNamesList));
      initInput(carNamesInput);
      return;
    }

    const racingCars = carNamesList.map((carName) => new Car(carName));
    console.log(racingCars);
  };

  const onClickRacingCountSubmitButton = (event) => {
    event.preventDefault();
    const racingCount = getRacingCountNumber();

    if (!isValidRacingCount(racingCount)) {
      alert("양의 정수를 입력해주세요.");
      initInput(racingCountInput);
      return;
    }

    console.log(racingCount);
  };

  carNamesSubmitButton.addEventListener("click", onClickCarNamesSubmitButton);
  racingCountSubmitButton.addEventListener(
    "click",
    onClickRacingCountSubmitButton
  );
}

new RacingGame();
