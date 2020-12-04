import {carNamesInput, racingCountInput} from "./view/input/input.js";
import {carNamesButton, racingCountButton} from "./view/button/button.js";
import Car from "./car/car.js";
import Validation from "./utils/validation.js";
import Toggle from "./toggle/toggle.js";
import Init from "./init/init.js";

export default class RacingCarGame {
	constructor() {
		new Init();
		
		this.toggle = new Toggle();

		this.carNames;
		this.racingCount;

		this.setCarNamesButtonHandlers();
		this.setRacingCountButtonHandlers();
	}

	setCarNamesButtonHandlers = () => {
		carNamesButton.addEventListener("click", this.continueGameIfValid);
	}

	setRacingCountButtonHandlers = () => {
		racingCountButton.addEventListener("click", this.playGameIfValid);
	}

	continueGameIfValid = () => {
		const carNames = carNamesInput.value.split(",");
		let carName;

		for (carName of carNames) {
			if (!new Validation().isCarNameValid(carName)) return;
		}

		this.carNames = carNames;

		this.showRacingCountInput();
		this.showRacingCountButton();
	}

	showRacingCountInput = () => {
		this.toggle.showElement(racingCountInput);
	}

	showRacingCountButton = () => {
		this.toggle.showElement(racingCountButton);
	}

	playGameIfValid = () => {
		const racingCount = Number(racingCountInput.value);

		if (!new Validation().isRacingCountValid(racingCount)) return;

		this.racingCount = racingCount;

		this.playGame();
	}

	playGame = () => {
		const cars = this.getCarObjects(this.carNames);

		for (let race = 0; race < this.racingCount; race++) {
			cars.forEach(car => car.setDistance());
		}

		console.log(cars);
	}

	getCarObjects = carNamesList => {
		const carObjects = [];
		
		carNamesList.forEach(carName => carObjects.push(new Car(carName)));

		return carObjects;
	}
}

new RacingCarGame();
