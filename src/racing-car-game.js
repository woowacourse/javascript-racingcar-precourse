import Car from './car.js';

export default class RacingCarGame {
    constructor(carNameArray, racingCount, app) {
        this.carNameArray = carNameArray;
        this.racingCount = racingCount;
        this.cars = [];
        this.winners = [];
        this.app = app;
    }

    gameStart() {
        this.generateCars();
        for(let i = 0; i < this.racingCount; i++) {
            this.playOneRoundGame();
            this.renderOneRoundResult();
        }
        this.getWinners();
        this.renderWinners();
    }
    
    getWinners() {
        const maxStep = this.cars
            .map(car => car.result)
            .sort((a, b) => b.length  - a.length)[0]
            .length;
        this.winners = this.cars
            .filter(car => car.result.length === maxStep)
            .map(car => car.name);
    }
    
    renderWinners() {
        const result = document.createElement('p');
        result.innerHTML = `최종 우승자: <span id="racing-winners">${this.winners.join(', ')}</span>`;
        this.app.appendChild(result);
    }
    
    generateCars() {
        this.carNameArray.forEach(name => {
            this.cars.push(new Car(name));
        });
    }
    
    playOneRoundGame() {
        this.cars.forEach(car => {
            if(this.checkForwardCondition()) car.result += '-';
        });
    }
    
    renderOneRoundResult() {
        const roundResult = document.createElement('p');
        this.cars.forEach(car => roundResult.innerHTML += `${car.name}: ${car.result}<br>`);
        this.app.appendChild(roundResult);
    }

    checkForwardCondition() {
        return this.generateRandomNumber() >= 4;
    }
    
    generateRandomNumber() {
        return MissionUtils.Random.pickNumberInRange(0, 9);
    }
};