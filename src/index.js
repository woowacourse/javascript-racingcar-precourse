import {carNamesInput, racingCountInput} from "/src/view/input/input.js";
import {carNamesButton, racingCountButton} from "/src/view/button/button.js";
import Car from "/src/car/car.js";
import Handler from "/src/handler/handler.js";
import Validity from "/src/utils/validity.js";


export default class RacingCarGame {
	constructor() {
		this.handler = new Handler();
		this.validity = new Validity();

		this.handler.setClickHandler(carNamesButton, [this.setCarNames, this.displayRacingCountInput, this.displayRacingCountButton]);
		this.handler.setClickHandler(racingCountButton, [this.setRacingCount, this.startGame]);

		this.carNames = "";
		this.racingCount = 0;

		this.hideRacingCountInput();
		this.hideRacingCountButton();
		this.setAttributes();
	}

	setAttributes = () => {
		carNamesInput.setAttribute("id", "car-names-input");
		carNamesButton.setAttribute("id", "car-names-submit");
		racingCountInput.setAttribute("id", "racing-count-input");
		racingCountButton.setAttribute("id", "racing-count-submit");
	}

	setCarNames = () => {
		this.carNames = carNamesInput.value;

		console.log(this.validity.isCarNameValid(this.carNames.split(",")[0]));
	}

	setRacingCount = () => {
		this.racingCount = Number(racingCountInput.value);
	}

	hideRacingCountInput = () => {
		racingCountInput.style.display = "none";
	};

	hideRacingCountButton = () => {
		racingCountButton.style.display = "none";
	}

	displayRacingCountInput = () => {
		racingCountInput.style.display = "inline";
	};

	displayRacingCountButton = () => {
		racingCountButton.style.display = "inline-block";
	}

	startGame = () => {
		if (this.validity.isRacingCountValid(this.racingCount)) {
			const carNamesList = this.carNames.split(",");
			const carObjects = this.getCarObjectsList(carNamesList);
		
			this.playGame(carObjects);
		}
	}

	getCarObjectsList = carNamesList => {
		const carObjects = [];
		carNamesList.forEach(carName => carObjects.push(new Car(carName)));

		return carObjects;
	}

	playGame = (carObjects) => {
		console.log(carObjects);
	}
}

new RacingCarGame();
