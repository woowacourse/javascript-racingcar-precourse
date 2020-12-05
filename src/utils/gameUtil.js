import { NUM } from "./constants.js";

export const getRandomNumber = () => Math.floor(Math.random() * NUM.RANGE);

export const getForwardSteps = num => (num <= NUM.BOUND ? NUM.STOP : NUM.GO);
