import {
	MAXIMUM_CAR_NAME_LENGTH,
	MINIMUM_CAR_NAME_LENGTH,
} from "../constants/constants.js";

export default class Validation {
	isCarNameValid = carName => {
		const validity = (
			MINIMUM_CAR_NAME_LENGTH <= carName.length && carName.length <= MAXIMUM_CAR_NAME_LENGTH
		) ? true : false;
		
		if (!validity) {
			alert("자동차 이름을 5자 이하로 입력해주세요.");
		}

		return validity;
	}

	isRacingCountValid = racingCount => {
		const validity = (
			Number.isInteger(racingCount) && racingCount !== 0
		) ? true : false;

		if (!validity) {
			alert("0보다 큰 정수를 입력해주세요.");
		}

		return validity;
	}
}