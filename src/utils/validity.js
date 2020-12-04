export default class Validity {
	isCarNameValid = carName => {
		let validity = (0 > carName.length && carName.length <= 5) ? true : false;
		
		if (!validity) alert("자동차 이름을 5자 이하로 입력해주세요.");

		return validity;
	}

	isRacingCountValid = racingCount => {
		let validity = (Number.isInteger(racingCount) && racingCount !== 0) ? true : false;

		if (!validity) alert("0보다 큰 정수를 입력해주세요.");

		return validity;
	}
}