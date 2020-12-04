export function renderTryCountScreen() {
    const racingCount = document.querySelector("#racing-count");
    racingCount.innerHTML = `
          <h4>시도할 횟수를 입력해주세요.</h4>
          <input id="racing-count-input" type="number" />
          <button id="racing-count-submit">확인</button>
          `;
}

export function renderRacingResultScreen(racingResult, racingCounts) {
    const racingResultScreen = document.querySelector("#racing-result");
    racingResultScreen.innerHTML = `<h4>📄 실행 결과</h4>`;

    [...Array(racingCounts)].forEach((car, racingCounts) => {
        racingResult.forEach((car) => {
            racingResultScreen.innerHTML += car.render(racingCounts + 1);
        });
        racingResultScreen.innerHTML += `<br/>`;
    });
    return racingResultScreen;
}

export function renderRacingGameWinner(racingResult, racingResultScreen) {
    const moveCounts = racingResult.map((car) => car.moveCounts);
    let winnerList = [];

    racingResult.forEach((car) => {
        if (car.moveCounts === Math.max(...moveCounts)) {
            winnerList.push(car.name);
        }
    });

    racingResultScreen.innerHTML += `
    <div>최종우승자: ${winnerList.join(", ")}</div>
    `;
    console.log(racingResult);
    console.log(winnerList);
}
