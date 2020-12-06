import {racingCarGameInput as input} from "./input.js";
import {racingCarGameToggle as toggle} from "../utils/toggle.js";

class Output {
	constructor() {
		this.hideRacingCountInput();
		this.hideRacingCountButton();
	}

	hideRacingCountInput = () => {
		toggle.hideElement(input.racingCountInput);
	}

	hideRacingCountButton = () => {
		toggle.hideElement(input.racingCountButton);
	}

	showRacingCountInput = () => {
		toggle.showElement(input.racingCountInput);
	}

	showRacingCountButton = () => {
		toggle.showElement(input.racingCountButton);
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

	}
}

export const racingCarGameOutput = new Output();