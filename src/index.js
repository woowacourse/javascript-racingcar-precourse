export default function RacingGame() {
  const carNamesSubmitButton = document.getElementById("car-names-submit");

  const getCarNames = () => {
    const carNamesInput = document.getElementById("car-names-input");
    const carNames = carNamesInput.value;
    const carNamesList = carNames.split(",");

    return carNamesList;
  };

  const onClickCarNamesSubmitButton = (event) => {
    event.preventDefault();
    const carNamesList = getCarNames();
    console.log(carNamesList);
  };

  carNamesSubmitButton.addEventListener("click", onClickCarNamesSubmitButton);
}

new RacingGame();
