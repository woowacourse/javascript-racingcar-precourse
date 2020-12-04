import { Car } from "./car.js"

export class Cars {
    constructor(carNameArray) {
        this.cars = carNameArray.map(item => Car(item))
    }

    makeCarsOneGame() {
        this.cars.forEach(car => car.makeOneInningGame());
    }

    getCarsResult() {
        this.result = this.cars.map(car => car.getResult());
    }
}