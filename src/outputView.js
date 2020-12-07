import { nameButton, countButton, nameInput, countInput } from "./inputUtil.js"

const countHTML = document.querySelector("#racing-count-div");
const resultHTML = document.querySelector("#result-div");

export const removeCountHTML = () => {
    countHTML.style.display = "none";
};

export const addCountHTML = () => {
    countHTML.style.display = "block";
};

export const removeResultHTML = () => {
    resultHTML.style.display = "none";
};

export const addResultHTML = () => {
    resultHTML.style.display = "block";
};

export const showResultHTML = (HTML) => {
    resultHTML.innerHTML += HTML;
};

export const resetResultHTMl = () => {
    resultHTML.innerHTML = "<h4>📄 실행 결과</h4>";
};

export const resetInput = () => {
    nameInput.value = "";
    countInput.value = "";
};