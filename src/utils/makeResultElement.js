function makeResultElement() {
    if(!isExist()) {
        const parentDiv = document.getElementById("app");
        const racingResult = document.createElement("span");
        const racingWinners = document.createElement("span");
        const resultText = document.createElement("span");

        racingResult.id = "racing-results";
        racingWinners.id = "racing-winners";
        parentDiv.appendChild(racingResult);
        parentDiv.appendChild(resultText);
        resultText.innerText = "최종 우승자: ";
        resultText.appendChild(racingWinners);
    }
}

function isExist() {
    const customSpan = document.getElementById("racing-winners");
    return customSpan != null;
}

export default makeResultElement;
