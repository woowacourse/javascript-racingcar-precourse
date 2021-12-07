import { $carNameInput } from "../constants/constants.js";
import Car from "./Car.js";

export const parseCarName = () => $carNameInput.value.split(",");

export const createCars = () => parseCarName().map((x) => new Car(x));