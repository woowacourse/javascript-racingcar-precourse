import {racingCarGameInput as input} from './input.js';
import Toggle from '../utils/toggle.js';

class Output {
	constructor() {
		this.racingCountToggle = new Toggle();
		this.carGameResultToggle = new Toggle();
		this.carGameResultContainer = document.getElementsByClassName('car-game-result-container')[0];

		this.hideRacingCountInput();
		this.hideRacingCountButton();
		this.hideCarGameResult();
	}

	hideRacingCountInput = () => {
		this.racingCountToggle.hideElement(input.racingCountInput);
	}

	hideRacingCountButton = () => {
		this.racingCountToggle.hideElement(input.racingCountButton);
	}

	hideCarGameResult = () => {
		this.carGameResultToggle.hideElement(this.carGameResultContainer);
	}

	showRacingCountInput = () => {
		this.racingCountToggle.showElement(input.racingCountInput);
	}

	showRacingCountButton = () => {
		this.racingCountToggle.showElement(input.racingCountButton);
	}

	showCarGameResult = () => {
		this.carGameResultToggle.showElement(this.carGameResultContainer);
	}

	showRacingResult = racingCars => {
		const raceResultContainer = document.createElement('p');

		racingCars.forEach(car => {
			raceResultContainer.appendChild(document.createTextNode(`${car.name}: ${'-'.repeat(car.distance)}`));
			raceResultContainer.appendChild(document.createElement('br'));
		});

		this.carGameResultContainer.appendChild(raceResultContainer);
	}

	showWinners = winners => {
		const winnersNames = this.getWinnersNames(winners).join(', ');
		const winnersNamesContainer = document.createElement('div');

		winnersNamesContainer.appendChild(document.createTextNode(`최종 우승자: ${winnersNames}`));
		this.carGameResultContainer.appendChild(winnersNamesContainer);
	}

	getWinnersNames = winners => {
		let winnersNames = [];

		for (let winner of winners) {
			winnersNames.push(winner.name);
		}

		return winnersNames;
	}
}

export const racingCarGameOutput = new Output();