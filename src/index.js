// export default function RacingCarGame() {}

// new RacingCarGame();

function validateCarNames(carNamesInputValue) {
    const isValid = carNamesInputValue.every(
        (carName) => 0 < carName && carName < 6
    );
    return isValid;
}

function takeCarNames() {
    const carNamesInput = document.querySelector("#car-names-input");
    return carNamesInput.value.split(",");
}

function handleCarNamesSubmitClick() {
    const carNamesInputValue = takeCarNames();
    const isValid = validateCarNames(carNamesInputValue);
}

function init() {
    const carNamesSubmitButton = document.querySelector("#car-names-submit");
    carNamesSubmitButton.addEventListener("click", handleCarNamesSubmitClick);
}
init();
