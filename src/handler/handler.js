export default class Handler {
	constructor (element, callback) {
		this.element = element;
		this.callback = callback;
	}

	setClickHandler = () => {
		this.element.addEventListener("click", this.callback);
	}
}