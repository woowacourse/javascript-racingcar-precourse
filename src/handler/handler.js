export default class Handler {
	setClickHandler = (element, callback) => {
		element.addEventListener("click", callback);
	}
}