import { handleCarNamesSubmitClick } from "./carNames.js";

function init() {
    const carNamesSubmitButton = document.querySelector("#car-names-submit");
    carNamesSubmitButton.addEventListener("click", handleCarNamesSubmitClick);
}

init();
