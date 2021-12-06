'use strict';

// functions
function gameStart(carNameArray, racingCount) {
    const cars = generateCars(carNameArray);
    for(let i = 0; i < racingCount; i++) {
        playOneRoundGame(cars);
        renderOneRoundResult(cars);
    }
    const winners = getWinners(cars);
}

function getWinners(cars) {
    const maxStep = cars
        .map(car => car.result)
        .sort((a, b) => b.length  - a.length)[0].length;
    return cars
        .filter(car => car.result.length === maxStep)
        .map(car => car.name);
}

function generateCars(carNameArray) {
    const cars = [];
    carNameArray.forEach(name => {
        cars.push({name, result: ''});
    });
    return cars;
}

function playOneRoundGame(cars) {
    cars.forEach(car => {
        if(checkForwardCondition()) car.result += '-';
    });
}

function renderOneRoundResult(cars) {
    const roundResult = document.createElement('p');
    cars.forEach(car => roundResult.innerHTML += `${car.name}: ${car.result}<br>`);
    app.appendChild(roundResult);
}

function generateRandomNumber() {
    return MissionUtils.Random.pickNumberInRange(0, 9);
}

function checkForwardCondition() {
    return generateRandomNumber() >= 4;
}

// event handler
function isCorrectCarName(carNameInputValue) {
    const wrongNames = carNameInputValue
        .split(',')
        .filter(name => name.length > 5 || name.length < 1);
    if(!wrongNames.length) return true;
    else return false;
}

function isCorrectCount(countInputValue) {
    return Number.isInteger(Number(countInputValue)) && countInputValue >= 1;
}

function onCarNameSubmit() {
    if(!isCorrectCarName(carNameInput.value)) {
        alert("잘못된 입력 형식입니다. 쉼표로 구분하여 각각 5자 이하로 입력해주세요.");
        carNameInput.value = '';
        carNameInput.focus();
    }
}

function onRacingCountSubmit() {
    if(isCorrectCount(countInput.value)) {
        if(!isCorrectCarName(carNameInput.value)) {
            alert("자동차 이름을 형식에 맞춰 입력해 주세요.");
            carNameInput.value = '';
            carNameInput.focus();
        }
        else {
            gameStart(carNameInput.value.split(','), Number(countInput.value));
        }
    }
    else {
        alert("잘못된 입력 형식입니다. 1 이상의 정수를 입력해주세요.");
        countInput.value = '';
        countInput.focus();
    }
}

// DOM
const app = document.querySelector("#app");
const carNameInput = document.querySelector("#car-names-input");
const countInput = document.querySelector("#racing-count-input");

app.addEventListener("click", function(e) {
    e.preventDefault();

    const handleFunctions = {
        "car-names-submit"() { onCarNameSubmit(); },
        "racing-count-submit"() { onRacingCountSubmit(); },
    };
    if(Object.keys(handleFunctions).includes(e.target.id)) handleFunctions[e.target.id]();
});
