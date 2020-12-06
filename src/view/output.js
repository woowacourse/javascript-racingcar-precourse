import {racingCarGameInput as input} from "./input.js";
import Toggle from "../utils/toggle.js";

class Output {
	constructor() {
		this.racingCountToggle = new Toggle();

		this.hideRacingCountInput();
		this.hideRacingCountButton();
	}

	hideRacingCountInput = () => {
		this.racingCountToggle.hideElement(input.racingCountInput);
	}

	hideRacingCountButton = () => {
		this.racingCountToggle.hideElement(input.racingCountButton);
	}

	showRacingCountInput = () => {
		this.racingCountToggle.showElement(input.racingCountInput);
	}

	showRacingCountButton = () => {
		this.racingCountToggle.showElement(input.racingCountButton);
	}

	showRacingResult = racingCars => {
		const raceResultContainer = document.createElement("p");

		racingCars.forEach(car => {
			raceResultContainer.appendChild(document.createTextNode(`${car.name}: ${"-".repeat(car.distance)}`));
			raceResultContainer.appendChild(document.createElement("br"));
		});

		const gameResultContainer = document.getElementsByClassName("car-game-result-container")[0];

		gameResultContainer.appendChild(raceResultContainer);
	}

	showWinners = winners => {
		const winnersNames = this.getWinnersNames(winners).join(", ");
		const winnersNamesContainer = document.createElement("div");

		winnersNamesContainer.appendChild(document.createTextNode(`최종 우승자: ${winnersNames}`));
		document.getElementById("app").appendChild(winnersNamesContainer);
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