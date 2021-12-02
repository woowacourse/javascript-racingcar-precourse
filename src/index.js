export default function RacingGame() {
  const carNamesSubmitButton = document.getElementById("car-names-submit");

  const getCarNames = () => {
    const carNamesInput = document.getElementById("car-names-input");
    const carNames = carNamesInput.value;
    const carNamesList = carNames.split(",");

    return carNamesList;
  };

  const isValidCarNameLength = (carNames) => {
    for (const carName of carNames) {
      if (carName.length > 5) {
        return false;
      }
      if (carName.length < 1) {
        return false;
      }
    }

    return true;
  };

  const onClickCarNamesSubmitButton = (event) => {
    event.preventDefault();
    const carNamesList = getCarNames();

    if (!isValidCarNameLength(carNamesList)) {
      return;
    }
  };

  carNamesSubmitButton.addEventListener("click", onClickCarNamesSubmitButton);
}

new RacingGame();
