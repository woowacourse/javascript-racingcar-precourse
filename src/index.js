import Car from "src/core/car.js"

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
		this.carNamesInput.addAttribute("id", "car-names-input");
		this.carNamesSubmit.addAttribute("id", "car-names-submit");
		this.racingCountInput.addAttribute("id", "racing-count-input");
		this.racingCountSubmit.addAttribute("id", "racing-count-submit");
	}

	setHandlers = () => {
		this.carNamesSubmit.addEventListener("click", this.getCarNames);
	}

	getCarNames = () => {
		this.carName = this.carNamesInput.value;
	}
}
new RacingCarGame();
