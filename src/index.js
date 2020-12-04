import {carNamesInput, racingCountInput} from "./view/input/input.js";
import {carNamesButton, racingCountButton} from "./view/button/button.js";
import Car from "./car/car.js";
import Validity from "./utils/validity.js";
import Toggle from "./toggle/toggle.js";
import Init from "./init/init.js";

export default class RacingCarGame {
	constructor() {
		new Init();
		
		this.validity = new Validity();
		this.toggle = new Toggle();

		this.carNamesValue;
		this.racingCountValue;

		this.setHandlers();
	}

	setHandlers = () => {
		carNamesButton.addEventListener("click", this.setCarNames);
		racingCountButton.addEventListener("click", this.setRacingCount);
		racingCountButton.addEventListener("click", this.startGame);
	}

	setCarNames = () => {
		this.carNamesValue = carNamesInput.value;

		console.log(this.validity.isCarNameValid(this.carNames.split(",")));
	}

	setRacingCount = () => {
		this.racingCountValue = Number(racingCountInput.value);
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
