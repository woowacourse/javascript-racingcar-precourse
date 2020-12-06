export default class Winner {
	constructor(racingCars) {
		this.racingCars = racingCars;
	}

	getWinners = () => {
		const maxDistance = this.getMaxDistance();
		const winners = [];
		
		for (let car of this.racingCars) {
			if (car.distance === maxDistance) {
				winners.push(car);
			}
		}

		return winners;
	}

	getMaxDistance = () => {
		let maxDistance = 0;

		for (let car of this.racingCars) {
			if (car.distance > maxDistance) {
				maxDistance = car.distance;
			}
		}
		
		return maxDistance;
	}
}