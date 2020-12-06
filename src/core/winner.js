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
		// racingCars를 거리가 큰 순으로 정렬
		this.racingCars.sort((carA, carB) => carB.distance - carA.distance);
		const maxDistance = this.racingCars[0].distance;
		
		return maxDistance;
	}
}