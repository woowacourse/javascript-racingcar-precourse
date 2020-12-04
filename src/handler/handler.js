export default class Handler {
	setClickHandler = (element, callbacks) => {
		for (let callback = 0; callback < callbacks.length; callback++) {
			element.addEventListener("click", callbacks[callback]);
		}
	}
}