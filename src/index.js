import Car from "/src/core/car.js"

export default class RacingCarGame {
	constructor() {
		this.carNamesInput = document.getElementsByTagName("input")[0];
		this.carNamesSubmit = document.getElementsByTagName("button")[0];
		this.racingCountInput = document.getElementsByTagName("input")[1];
		this.racingCountSubmit = document.getElementsByTagName("button")[1];

		this.carNames = "";
		this.racingCount = 0;

		this.setAttributes();
		this.setHandlers();
		this.setRacingCountInputAndSubmitStyleToNone();
	}

	setAttributes = () => {
		this.carNamesInput.setAttribute("id", "car-names-input");
		this.carNamesSubmit.setAttribute("id", "car-names-submit");
		this.racingCountInput.setAttribute("id", "racing-count-input");
		this.racingCountSubmit.setAttribute("id", "racing-count-submit");
	}

	setHandlers = () => {
		this.carNamesSubmit.addEventListener("click", this.getCarNames);
		this.carNamesSubmit.addEventListener("click", this.displayRacingCountInputAndSubmit);
		this.racingCountSubmit.addEventListener("click", this.getRacingCount);
		this.racingCountSubmit.addEventListener("click", this.startGame);
	}

	setRacingCountInputAndSubmitStyleToNone = () => {
		this.racingCountInput.style.display = "none";
		this.racingCountSubmit.style.display = "none";
	}

	displayRacingCountInputAndSubmit = () => {
		const carNamesList = this.carNames.split(",");

		if (!this.isCarNamesValid(carNamesList)) {
			return;
		}

		this.racingCountInput.removeAttribute("style");
		this.racingCountSubmit.removeAttribute("style");
	}

	getCarNames = () => {
		this.carNames = this.carNamesInput.value;
	}

	getRacingCount = () => {
		this.racingCount = this.racingCountInput.value;
	}

	startGame = () => {
		this.displayRacingCountInputAndSubmit();
		const carNamesList = this.carNames.split(",");
		const carObjects = this.getCarObjectsList(carNamesList);
		
		this.playGame(carObjects);
	}

	playGame = (carObjects) => {

	}

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

	getCarObjectsList = carNamesList => {
		const carObjects = [];
		carNamesList.forEach(carName => carObjects.push(this.createCar(carName)));

		return carObjects;
	}

	createCar = carName => {
		const newCar = new Car(carName);

		return newCar;
	}
}

new RacingCarGame();
