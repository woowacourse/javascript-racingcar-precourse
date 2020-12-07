const countHTML = document.querySelector("#racing-count-div");
const resultHTML = document.querySelector("#result-div");
const app = document.querySelector("#app");
const parentHTML = document.querySelector(".car-game-container");

const removeCountHTML = () => {
    parentHTML.removeChild(countHTML);
};

const addCountHTML = () => {
    parentHTML.appendChild(countHTML);
};

const removeResultHTML = () => {
    app.removeChild(resultHTML);
};

const addResultHTML = () => {
    app.appendChild(resultHTML);
};

const showResultHTML = (HTML) => {
    resultHTML.innerHTML += HTML;
};

export { removeCountHTML, addCountHTML, removeResultHTML, addResultHTML, showResultHTML };