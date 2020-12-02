import Car from "/src/core/car.js"

export default class RacingCarGame {
	constructor() {
		this.carNamesInput = document.getElementsByTagName("input")[0];
		this.carNamesSubmit = document.getElementsByTagName("button")[0];
		this.racingCountInput = document.getElementsByTagName("input")[1];
		this.racingCountSubmit = document.getElementsByTagName("button")[1];

		this.carNames;
		this.racingCount;

		this.setAttributes();
		this.setHandlers();
	}

	setAttributes = () => {
		this.carNamesInput.setAttribute("id", "car-names-input");
		this.carNamesSubmit.setAttribute("id", "car-names-submit");
		this.racingCountInput.setAttribute("id", "racing-count-input");
		this.racingCountSubmit.setAttribute("id", "racing-count-submit");
	}

	setHandlers = () => {
		this.carNamesSubmit.addEventListener("click", this.getCarNames);
		this.racingCountSubmit.addEventListener("click", this.getRacingCount);
		this.racingCountSubmit.addEventListener("click", this.startGame);
	}

	getCarNames = () => {
		this.carNames = this.carNamesInput.value;
	}

	getRacingCount = () => {
		this.racingCount = this.racingCountInput.value;
	}

	startGame = () => {
		console.log(this.carNames, this.racingCount);
	}
}

new RacingCarGame();
