export default class Toggle {
	hideElement = element => {
		element.style.display = "none";
	}

	showElement = element => {
		element.style.display = "inline-block";
	}
}