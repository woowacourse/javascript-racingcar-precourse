import Car from "./car.js"
import InputCarName from "./InputCarName.js";
import InputRacingCount from "./InputRacingCount.js";

const a = new Car("a", 3);
console.log(a.moveArray);
console.log(a.totalDistance);

export const inputCarName = new InputCarName();
const c = new InputRacingCount();

// console.log(inputCarName.carNames);
// console.log(c.racingCount);