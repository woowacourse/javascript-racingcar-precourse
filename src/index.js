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

    render(roundNumber) {
        const moveSign = this.moveList.slice(0, roundNumber).join("");
        return `<div>${this.name}: ${moveSign}</div>`;
    }
}

function makeNewCars() {
    const carNames = getCarNames();
    const newCars = carNames.map((car) => new Car(car));
    return newCars;
}

function playRacingCarGames(newCars, racingCounts) {
    const racingResult = newCars;
    [...Array(racingCounts)].forEach(() => newCars.forEach((car) => car.go()));
    return racingResult;
}

function renderRacingResultScreen(racingResult, racingCounts) {
    const racingResultScreen = document.querySelector("#racing-result");
    racingResultScreen.innerHTML = `<h4>📄 실행 결과</h4>`;

    [...Array(racingCounts)].forEach((car, racingCounts) => {
        racingResult.forEach((car) => {
            racingResultScreen.innerHTML += car.render(racingCounts + 1);
        });
        racingResultScreen.innerHTML += `<br/>`;
    });
    return racingResultScreen;
}

function renderRacingGameWinner(racingResult, racingResultScreen) {
    const moveCounts = racingResult.map((car) => car.moveCounts);
    let winnerList = [];

    racingResult.forEach((car) => {
        if (car.moveCounts === Math.max(...moveCounts)) {
            winnerList.push(car.name);
        }
    });

    racingResultScreen.innerHTML += `
    <div>최종우승자: ${winnerList.join(", ")}</div>
    `;
    console.log(racingResult);
    console.log(winnerList);
}

function validateCarNames(carNames) {
    const isValid = carNames.every(
        (carName) => 0 < carName.length && carName.length < 6
    );
    return isValid;
}

function getCarNamesInput() {
    const carNamesInput = document.querySelector("#car-names-input");
    return carNamesInput;
}

function getCarNames() {
    const carNamesInput = getCarNamesInput();
    const carNames = carNamesInput.value.split(",");
    return carNames;
}

function handleCarNamesSubmitClick() {
    const carNamesInput = getCarNamesInput();
    const carNames = getCarNames();
    const isValid = validateCarNames(carNames);
    if (isValid) {
        renderTryCountScreen();
        handleRacingCountSubmitButton();
    } else {
        resetCarNamesInputValue(carNamesInput);
    }
}

function resetCarNamesInputValue(carNamesInput) {
    alert("차 이름을 다시 입력해주세요");
    carNamesInput.value = "";
    carNamesInput.focus();
}

function renderTryCountScreen() {
    const racingCount = document.querySelector("#racing-count");
    racingCount.innerHTML = `
          <h4>시도할 횟수를 입력해주세요.</h4>
          <input id="racing-count-input" type="number" />
          <button id="racing-count-submit">확인</button>
          `;
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
    const racingCounts = Number(racingCountInput.value);
    const newCars = makeNewCars();
    const racingResult = playRacingCarGames(newCars, racingCounts);
    const racingResultScreen = renderRacingResultScreen(
        racingResult,
        racingCounts
    );
    renderRacingGameWinner(racingResult, racingResultScreen);
}

function init() {
    const carNamesSubmitButton = document.querySelector("#car-names-submit");
    carNamesSubmitButton.addEventListener("click", handleCarNamesSubmitClick);
}

init();
