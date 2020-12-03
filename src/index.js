import Car from "/src/car/car.js";
import Handler from "/src/handler/handler.js";
import {carNamesInput, racingCountInput} from "/src/view/input/input.js";
import {carNamesButton, racingCountButton} from "/src/view/button/button.js";

export default class RacingCarGame {
	constructor() {
		new Handler(carNamesButton, this.setCarNames).setClickHandler();
		new Handler(carNamesButton, this.displayRacingCountInputAndSubmit).setClickHandler();
		new Handler(racingCountButton, this.setRacingCount).setClickHandler();
		new Handler(racingCountButton, this.startGame).setClickHandler();

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
	}

	setRacingCountInputAndSubmitStyleToNone = () => {
		racingCountInput.style.display = "none";
		racingCountButton.style.display = "none";
	};

	displayRacingCountInputAndSubmit = () => {
		racingCountInput.removeAttribute("style");
		racingCountButton.removeAttribute("style");
	};

	isCarNamesValid = carNamesList => {
		let validity = true;

		for (let name = 0; name < carNamesList.length; name++) {
			if (carNamesList[name].length > 5 || carNamesList[name].length <= 0) {
				validity = false;
				alert("자동차 이름을 5자 이하로 입력해주세요.");
				break;
			}
		}

		return validity;
	}

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

	isRacingCountValid(racingCount) {
		let validity = true;

		if (parseInt(racingCount) !== racingCount) {
			validity = false;
			alert("0보다 큰 정수를 입력해주세요.");
		} 

		return validity;
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
