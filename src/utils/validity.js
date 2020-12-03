export default class Vadlidity {
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

	isRacingCountValid = racingCount => {
		let validity = true;

		if (parseInt(racingCount) !== racingCount) {
			validity = false;
			alert("0보다 큰 정수를 입력해주세요.");
		} 

		return validity;
	}
}