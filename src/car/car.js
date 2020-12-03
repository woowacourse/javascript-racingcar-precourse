import Random from "/src/utils/random.js";

export default class Car {
	constructor (name) {
		this.name = name;
		this.distance = 0;
	}
	
	setDistance = () => {
		if (new Random.getRandomNumber() >= 4) {
			this.distance += 1;
		}	
	}
}