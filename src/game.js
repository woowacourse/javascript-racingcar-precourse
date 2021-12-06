import { Car, repeatRacingCount } from "./car.js";
import { showResult, addApp } from "./view.js";
export const PlayGame = function (game_information) {
    this.racing_count = 0;
    this.Cars = [];

    this.init = () => {
        setCars(setCarObject(game_information.car_names));
        setRacingCount(Number(game_information.racing_count));
        gameStart();
    };
    const setCars = (object) => {
        this.Cars = object;
    };

    const getCars = () => {
        return this.Cars;
    };

    const setRacingCount = (num) => {
        this.racing_count = num;
    };

    const gameStart = () => {
        const a = repeatRacingCount(this.racing_count, getCars());

        setCars(a);
        const result = calcResult(getCars());
        addApp(showResult(result));
    };

    const setCarObject = (car_names) => {
        let Cars = [];
        Cars = car_names.map((element) => {
            return new Car(element);
        });

        return Cars;
    };

    const calcResult = (object) => {
        object.sort(function (a, b) {
            return b.distance - a.distance;
        });
        const max = object[0].distance;
        const result = [];
        object.forEach((element) => {
            if (element.distance === max) {
                result.push(element.name);
            }
        });

        return result;
    };

    this.init();
};
