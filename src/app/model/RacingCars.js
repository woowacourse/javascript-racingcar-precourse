import Car from '../asset/Car.js';
import { CAR_CONTAINER_INIT_VALUE } from '../asset/constant.js';
import range from '../asset/range.js';

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

    getMaxTrackSize() {
        return this.cars.reduce((m, car) => Math.max(m, car.getTrackSize()), 0);
    }

    getWinners() {
        const maxTrackSize = this.getMaxTrackSize();

        return this.cars
            .filter((car) => car.getTrackSize() === maxTrackSize)
            .map((car) => car.getName());
    }

    getGameResult(racingCnt) {
        return range(racingCnt).map(() =>
            this.cars.map((car) => ({
                carName: car.getName(),
                trackLog: car.goIfEnoughAccel().getTrackLog(),
            })),
        );
    }
}
