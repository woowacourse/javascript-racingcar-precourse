export default function RacingCarGame() {
	function getCarNamesInput() {
		const carNamesSubmit = document.querySelector("#car-names-submit");
		carNamesSubmit.addEventListener("click", () => {
			const carNamesInput = document.querySelector("#car-names-input").value;
			console.log(carNamesInput)
			return carNamesInput
		}); 
	}

	function init() {
		getCarNamesInput();
	}

	init();
}

new RacingCarGame();