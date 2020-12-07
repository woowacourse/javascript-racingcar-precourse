import { makeCarNameIfPossible } from "./carNameCheckor.js";
import { makeRacingCountIfPossible } from "./countCheckor.js";
import { getCarNameInput, getRacingCountInput } from "./inputUtil.js";

const creatCars = () => {
    return makeCarNameIfPossible(getCarNameInput());
};

const creatRacingCount = () => {
    return makeRacingCountIfPossible(getRacingCountInput());
};

export { creatCars, creatRacingCount };