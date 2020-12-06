export default class Winner {
	constructor(racingCars) {
		this.racingCars = racingCars;
	}

	getWinners = () => {
		const maxDistance = this.getMaxDistance();
		const winners = [];
		for (let car = 0; car < this.racingCars.length; car++) {
			if (this.racingCars[car].distance !== maxDistance) {
				break;
			}
			winners.push(this.racingCars[car]);
		}

		return winners;
	}

	getMaxDistance = () => {
		this.racingCars.sort((carA, carB) => carB.distance - carA.distance);
		const maxDistance = this.racingCars[0].distance;
		
		return maxDistance;
	}
}