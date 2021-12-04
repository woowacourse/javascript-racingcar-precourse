export default function RacingGame() {
  const carNamesSubmitButton = document.getElementById("car-names-submit");

  const getCarNames = () => {
    const carNamesInput = document.getElementById("car-names-input");
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

  const isOnlySpace = (carName) => {
    if (!carName.trim()) {
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
      if (isOnlySpace(carName)) {
        return false;
      }
      if (!isValidLength(carName)) {
        return false;
      }
    }

    return true;
  };

  const onClickCarNamesSubmitButton = (event) => {
    event.preventDefault();
    const carNamesList = getCarNames();

    if (!isValidCarName(carNamesList)) {
      console.log("error");
      return;
    }
    console.log(carNamesList);
  };

  carNamesSubmitButton.addEventListener("click", onClickCarNamesSubmitButton);
}

new RacingGame();
