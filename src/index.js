import Car from "./car.js"
import InputCarName from "./InputCarName.js";
import InputRacingCount from "./InputRacingCount.js";

const a = new Car("a", 3);
console.log(a.moveArray);
console.log(a.totalDistance);

const b = new InputCarName();
const c = new InputRacingCount();