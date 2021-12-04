import Car from "./car.js";
export default class RacingGame {
    constructor(carNames, racingCount) {
        this.carNames = carNames;
        this.racingCount = racingCount;
        this.cars = [];

        this.makeCars(this.carNames, this.racingCount);
        this.findWinner(this.cars);

        // console.log("게임 실행");
        // console.log(this.carNames);
        // console.log(this.racingCount);
    }

    makeCars(carNames) {
        for(let i = 0; i < carNames.length; i++) {
            const car = new Car(carNames[i]);
            this.cars.push(car);
        }
    }

    findWinner(cars) {
        let maxDistance = cars[0].totalDistance;
        let winner = [];

        for(let i = 0; i < cars.length; i++) {
            let temp = cars[i].totalDistance;
            // console.log(temp);

            if(temp === maxDistance) {
                winner.push(cars[i].carName);
            } else if(temp > maxDistance) {
                winner = [];
                winner.push(cars[i].carName);
                maxDistance = temp;
            }

        }
        // console.log(winner);
        return winner;
    }
}