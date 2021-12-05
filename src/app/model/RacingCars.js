import Car from '../asset/car.js';
import { CAR_CONTAINER_INIT_VALUE } from '../asset/constant.js';

export default class RacingCars {
    constructor() {
        this.cars = CAR_CONTAINER_INIT_VALUE;
    }

    setCars(value) {
        this.cars = value;
    }

    generateCars(carNames) {
        this.setCars(carNames.map((carName) => new Car(carName)));
    }

    isEmptyCars() {
        return this.cars === CAR_CONTAINER_INIT_VALUE;
    }
}
