// export default function RacingCarGame() {}

// new RacingCarGame();

function validateCarNames(carNamesInputValue) {
    const isValid = carNamesInputValue.every(
        (carName) => 0 < carName.length && carName.length < 6
    );
    return isValid;
}

function handleCarNamesSubmitClick() {
    const carNamesInput = document.querySelector("#car-names-input");
    const carNamesInputValue = carNamesInput.value.split(",");
    const isValid = validateCarNames(carNamesInputValue);

    isValid ? showTryCountScreen() : resetCarNamesInputValue(carNamesInput);
}

function resetCarNamesInputValue(carNamesInput) {
    alert("차 이름을 다시 입력해주세요");
    carNamesInput.value = "";
    carNamesInput.focus();
}

function showTryCountScreen() {
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
