import { Car, checkDistance, repeatRacingCount } from "./car.js";
export const PlayGame = function (game_information) {
    this.racing_count = 0;
    this.Cars = [];
    // Object를 통해 생성된 생성자에서 this의 운선순위가 어떻게 되는지? new를 통해 생성자를 생성해야 함.
    // 게임 시작 및 파일 구조를 다시한번 짜보자.
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
        console.log(this.racing_count, getCars());
        const a = repeatRacingCount(this.racing_count, getCars());

        setCars(a);
        console.log(getCars());
    };

    const setCarObject = (car_names) => {
        let Cars = [];
        Cars = car_names.map((element) => {
            return new Car(element);
        });

        return Cars;
    };

    this.init();
};
