import Car from "./car.js";
export default class RacingGame {
    constructor(carNames, racingCount) {
        this.carNames = carNames;
        this.racingCount = racingCount;
        this.cars = [];

        this.makeCars(this.carNames, this.racingCount);

        // console.log("게임 실행");
        // console.log(this.carNames);
        // console.log(this.racingCount);
    }

    makeCars(carNames, racingCount) {
        for(let i = 0; i < carNames.length; i++) {
            const car = new Car(carNames[i], racingCount);
            this.cars.push(car);
        }
    }


}