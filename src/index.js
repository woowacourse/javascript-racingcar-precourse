import { Car } from "./Car.js";

export default function RacingCarGame() {
    let Car_num1 = new Car("test1");
    for (let i = 0; i < 3; i++) {
        Car_num1.makeCarMove();
    }
    console.log(Car_num1.getResult());
}

RacingCarGame();