// export default function RacingCarGame() {}

// new RacingCarGame();

function validateCarNames(carNamesInputValue) {
    const isValid = carNamesInputValue.every(
        (carName) => 0 < carName.length && carName.length < 6
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
    console.log(isValid);
    isValid ? showTryCountInput() : resetCarNamesInputValue();
}

function resetCarNamesInputValue() {}

function showTryCountInput() {
    const racingCount = document.querySelector("#racing-count");
    racingCount.innerHTML = `
          <h4>시도할 횟수를 입력해주세요.</h4>
          <input id="racing-count-input" type="number" />
          <button id="racing-count-submit">확인</button>
          `;
}

function init() {
    const carNamesSubmitButton = document.querySelector("#car-names-submit");
    carNamesSubmitButton.addEventListener("click", handleCarNamesSubmitClick);
}
init();
