import {INITIAL_CAR_DISTANCE} from "../constants/constants.js";
import Validation from "../utils/validation.js";

export default class Car {
	constructor (name) {
		this.name = name;
		this.distance = INITIAL_CAR_DISTANCE;
	}
	
	setDistance = () => {
		if (new Validation().isAbleToMove()) {
			this.distance += 1;
		}	
	}
}