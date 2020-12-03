export default class Car {
	constructor (name) {
		this.name = name;
		this.distance = 0;
	}
	
	setDistance = () => {
		if (this.getRandomNumber() >= 4) {
			this.distance += 1;
		}	
	}

	getRandomNumber = () => {
		const randomNumber = Math.floor(Math.random() * 9 + 1);

		return randomNumber;
	}
}