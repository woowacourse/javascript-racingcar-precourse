function makeResultElement() {
    if(!isExist()) {
        const parentDiv = document.getElementById("app");
        const racingWinners = document.createElement("span");

        racingWinners.id = "racing-winners";
        parentDiv.appendChild(racingWinners);
    }
}

function isExist() {
    const customSpan = document.getElementById("racing-winners");
    return customSpan != null;
}

export default makeResultElement;
