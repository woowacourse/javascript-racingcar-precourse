import { makeCarNameIfPossible } from "../components/carNameCheckor.js";
import { makeRacingCountIfPossible } from "../components/countCheckor.js";
import { getCarNameInput, getRacingCountInput } from "./inputUtil.js";

export const creatCars = () => {
    return makeCarNameIfPossible(getCarNameInput());
};

export const creatRacingCount = () => {
    return makeRacingCountIfPossible(getRacingCountInput());
};