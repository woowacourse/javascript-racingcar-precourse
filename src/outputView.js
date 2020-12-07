import { nameButton, countButton, nameInput, countInput } from "./inputUtil.js"

const countHTML = document.querySelector("#racing-count-div");
const resultHTML = document.querySelector("#result-div");
const app = document.querySelector("#app");
const parentHTML = document.querySelector(".car-game-container");
let nameButtonToggle = true;
let countButtonToggle = true;

const removeCountHTML = () => {
    countHTML.style.display = "none";
};

const addCountHTML = () => {
    countHTML.style.display = "block";
};

const removeResultHTML = () => {
    resultHTML.style.display = "none";
};

const addResultHTML = () => {
    resultHTML.style.display = "block";
};

const showResultHTML = (HTML) => {
    resultHTML.innerHTML += HTML;
};

const switchNameButton = () => {

    if (nameButtonToggle) {
        nameButtonToggle = false;
        return nameButton.disabled = true;
    }

    nameButtonToggle = true;
    return nameButton.disabled = false;
}

const switchCountButton = () => {

    if (countButtonToggle) {
        countButtonToggle = false;
        return countButton.disabled = true;
    }

    countButtonToggle = true;
    return countButton.disabled = false;
}

const resetResultHTMl = () => {
    resultHTML.innerHTML = "<h4>📄 실행 결과</h4>";
}

const resetInput = () => {
    nameInput.value = "";
    countInput.value = "";
}

export {
    removeCountHTML,
    addCountHTML,
    removeResultHTML,
    addResultHTML,
    showResultHTML,
    switchNameButton,
    switchCountButton,
    resetResultHTMl,
    resetInput
};