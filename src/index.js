import { carNamesInput } from "./controllers/userInput.js";

const $carNamesSubmit = document.getElementById("car-names-submit");

$carNamesSubmit.addEventListener("click", carNamesInput);
