export default function RacingCarGame() {
	function isSpace(carNamesInput) {
		return carNamesInput.search(/\s/) !== -1
	}

	function getCarNamesInput() {
		const carNamesSubmit = document.querySelector("#car-names-submit");
		carNamesSubmit.addEventListener("click", () => {
			const carNamesInput = document.querySelector("#car-names-input").value;
			
			if (isSpace(carNamesInput) === true) {
				alert("5자 이하의 문자를, 공백 없이, 콤마로 구분하여 입력해 주세요.")
			}

			return carNamesInput
		}); 
	}

	function init() {
		getCarNamesInput();
	}

	init();
}

new RacingCarGame();