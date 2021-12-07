export const showRacingProcess = (object) => {
    const process = object.map(
        (element) => `${element.name} : ${"-".repeat(element.distance)}`
    );

    return `<p>${process.join("</br>")}</p>`;
};

export const showResult = (object) => {
    const winners = object.join(",");
    return `<p>최종우승자:<span id="racing-winners">${winners}</span></p>`;
};

export const addApp = (string) => {
    const $app = document.getElementById("app");
    $app.innerHTML += string;
};

export const showElement = (element) => {
    element.style.display = "block";
};

export const hideElement = (element) => {
    element.style.display = "none";
};
