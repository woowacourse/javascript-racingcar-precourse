import Car from "./Car.js";
import { getCarNames } from "./carNames.js";

export function makeNewCars() {
    const carNames = getCarNames();
    const newCars = carNames.map((car) => new Car(car));
    return newCars;
}

export function playRacingCarGames(newCars, racingCounts) {
    const racingResult = newCars;
    [...Array(racingCounts)].forEach(() => newCars.forEach((car) => car.go()));
    return racingResult;
}
