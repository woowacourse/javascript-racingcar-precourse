import {
	INITIAL_CAR_DISTANCE,
	MOVE_INDICATOR_NUMBER,
} from "../constants/constants.js";
import Random from "../utils/random.js";

export default class Car {
	constructor (name) {
		this.name = name;
		this.distance = INITIAL_CAR_DISTANCE;
	}
	
	setDistance = () => {
		if (this.isAbleToMove()) {
			this.distance += 1;
		}	
	}

	isAbleToMove = () => {
		const canMove = (
			new Random().getRandomNumber() >= MOVE_INDICATOR_NUMBER
		) ? true : false;

		return canMove;
	}
}