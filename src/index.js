import {racingCarGameInput as input} from "./view/input.js";
import {racingCarGameOutput as output} from "./view/output.js";
import Car from "./core/car.js";
import Winner from "./core/winner.js";
import Validation from "./utils/validation.js";

export default class RacingCarGame {
	constructor() {
		this.carNames;
		this.racingCount;

		this.setCarNamesButtonHandlers();
		this.setRacingCountButtonHandlers();
	}

	setCarNamesButtonHandlers = () => {
		input.carNamesButton.addEventListener("click", this.continueGameIfValid);
	}

	setRacingCountButtonHandlers = () => {
		input.racingCountButton.addEventListener("click", this.playGameIfValid);
	}

	continueGameIfValid = () => {
		const carNames = input.carNamesInput.value.split(",");

		for (let carName of carNames) {
			if (!new Validation().isCarNameValid(carName)) {
				return;
			}
		}

		this.carNames = carNames;
		this.continueGame();
	}

	continueGame = () => {
		output.showRacingCountInput();
		output.showRacingCountButton();
	}

	playGameIfValid = () => {
		const racingCount = Number(input.racingCountInput.value);

		if (!new Validation().isRacingCountValid(racingCount)) {
			return;
		}

		this.racingCount = racingCount;
		this.playGame();
	}

	playGame = () => {
		const racingCars = this.getRacingCars(this.carNames);

		for (let race = 0; race < this.racingCount; race++) {
			racingCars.forEach(car => car.setDistance());
			output.showRacingResult(racingCars);
		}

		output.showWinners(new Winner(racingCars).getWinners());
	}

	getRacingCars = carNamesList => {
		const racingCars = [];
		
		carNamesList.forEach(carName => racingCars.push(new Car(carName)));

		return racingCars;
	}
}

new RacingCarGame();
