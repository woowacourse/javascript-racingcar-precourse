// export default function RacingCarGame() {}

// new RacingCarGame();

class Car {
    constructor(name) {
        this.name = name;
        this.moveCounts = 0;
        this.moveList = [];
    }

    go() {
        const move = Math.floor(Math.random() * 10) >= 4;
        const moveItem = move ? "-" : null;
        this.moveList.push(moveItem);
        const moveCount = move ? 1 : 0;
        this.moveCounts += moveCount;
    }
}

function makeNewCars() {
    const cars = takeCarNamesInputValue();
    const carsArray = cars.map((car) => new Car(car));
    console.log(carsArray);
}

function validateCarNames(carNamesInputValue) {
    const isValid = carNamesInputValue.every(
        (carName) => 0 < carName.length && carName.length < 6
    );
    return isValid;
}

function takeCarNamesInput() {
    const carNamesInput = document.querySelector("#car-names-input");
    return carNamesInput;
}

function takeCarNamesInputValue() {
    const carNamesInput = takeCarNamesInput();
    const carNamesInputValue = carNamesInput.value.split(",");
    return carNamesInputValue;
}

function handleCarNamesSubmitClick() {
    const carNamesInput = takeCarNamesInput();
    const carNamesInputValue = takeCarNamesInputValue();
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
    handleRacingCountSubmitButton();
}

function handleRacingCountSubmitButton() {
    const racingCountSubmitButton = document.querySelector(
        "#racing-count-submit"
    );
    racingCountSubmitButton.addEventListener(
        "click",
        handleRacingCountSubmitClick
    );
}

function handleRacingCountSubmitClick() {
    const racingCountInput = document.querySelector("#racing-count-input");
    const racingCountInputValue = racingCountInput.value;

    makeNewCars();
    console.log(racingCountInputValue);
}

function init() {
    const carNamesSubmitButton = document.querySelector("#car-names-submit");
    carNamesSubmitButton.addEventListener("click", handleCarNamesSubmitClick);
}
init();
