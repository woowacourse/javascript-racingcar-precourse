export default function RacingCarGame() {
	function isSpace(carNamesInput) {
		return carNamesInput.search(/\s/) !== -1;
	}
	
	function isSpecial(carNamesInput) {
		const specialCharacter = /[^가-힣ㄱ-하-ㅣa-zA-z0-9,]/;
		return specialCharacter.test(carNamesInput);
	}

	function getCarNamesInput() {
		const carNamesSubmit = document.querySelector("#car-names-submit");
		carNamesSubmit.addEventListener("click", () => {
			const carNamesInput = document.querySelector("#car-names-input").value;

			if (isSpace(carNamesInput) === true || isSpecial(carNamesInput) === true) {
				alert("5자 이하의 문자를, 공백 없이, 콤마로 구분하여 입력해 주세요.");
				return false;
			}
			
			return carNamesInput;
		}); 
	}

	function init() {
		getCarNamesInput();
	}

	init();
}

new RacingCarGame();