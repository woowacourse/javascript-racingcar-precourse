import {carNamesInput, racingCountInput} from "../view/input.js";
import {carNamesButton, racingCountButton} from "../view/button.js";
import Toggle from "./toggle.js";

export default class Init {
	constructor() {
		this.toggle = new Toggle();
		
		this.hideElements();
		this.setAttributes();
	}

	hideElements = () => {
		this.toggle.hideElement(racingCountInput);
		this.toggle.hideElement(racingCountButton);
	}

	setAttributes = () => {
		carNamesInput.setAttribute("id", "car-names-input");
		carNamesButton.setAttribute("id", "car-names-submit");
		racingCountInput.setAttribute("id", "racing-count-input");
		racingCountButton.setAttribute("id", "racing-count-submit");
	}
}