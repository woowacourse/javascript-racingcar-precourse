import { NUM } from "./constants.js";

const getRandomNumber = () => Matht.floor(Math.random() * NUM.RANGE);

const getForwardSteps = num => (num <= NUM.BOUND ? NUM.STOP : NUM.GO);
