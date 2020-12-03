import Car from "/src/car/car.js";
import Handler from "/src/handler/handler.js";
import Validity from "/src/utils/validity.js";
import {carNamesInput, racingCountInput} from "/src/view/input/input.js";
import {carNamesButton, racingCountButton} from "/src/view/button/button.js";

export default class RacingCarGame {
	constructor() {
		new Handler().setClickHandler(carNamesButton, this.setCarNames);
		new Handler().setClickHandler(carNamesButton, this.displayRacingCountInputAndSubmit);
		new Handler().setClickHandler(racingCountButton, this.setRacingCount);
		new Handler().setClickHandler(racingCountButton, this.startGame);

		this.carNames = "";
		this.racingCount = 0;

		this.setRacingCountInputAndSubmitStyleToNone();
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
		console.log(new Validity().isCarNamesValid(this.carNames.split(",")));
	}

	setRacingCountInputAndSubmitStyleToNone = () => {
		racingCountInput.style.display = "none";
		racingCountButton.style.display = "none";
	};

	displayRacingCountInputAndSubmit = () => {
		racingCountInput.removeAttribute("style");
		racingCountButton.removeAttribute("style");
	};

	setRacingCount = () => {
		this.racingCount = Number(racingCountInput.value);
	}

	startGame = () => {
		if (this.isRacingCountValid(this.racingCount)) {
			const carNamesList = this.carNames.split(",");
			const carObjects = this.getCarObjectsList(carNamesList);
		
			this.playGame(carObjects);
		}
	}

	getCarObjectsList = carNamesList => {
		const carObjects = [];
		carNamesList.forEach(carName => carObjects.push(this.createCar(carName)));

		return carObjects;
	}

	createCar = carName => {
		const newCar = new Car(carName);

		return newCar;
	}

	playGame = (carObjects) => {
		console.log(carObjects);
	}
}

new RacingCarGame();
