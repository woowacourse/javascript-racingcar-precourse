/*
racingGameResult = [
    carNames 리스트 형태,
    racingCount,
    racingGameRecord 객체 = {
        racingCount 게임 라운드 : {
            carName 입력된 index 순서 : {
                carName,
                score 해당 게임 라운드의 자동차 점수,
            }
        }
    }
    maxScore,
]

racingGameRecord 객체 예시
{0: {…}, 1: {…}, 2: {…}, 3: {…}}
  0게임 라운드:
    0: {carName: "a", score: 0} 0라운드 0index 'a'자동차이름,점수
    1: {carName: "b", score: 0}
    2: {carName: "c", score: 0}
    3: {carName: "d", score: 0}
  1: {0: {…}, 1: {…}, 2: {…}, 3: {…}}
  2: {0: {…}, 1: {…}, 2: {…}, 3: {…}}
  3: {0: {…}, 1: {…}, 2: {…}, 3: {…}}
*/

export default class Render {
  constructor(racingGameResult) {
    const [carNames, racingCount, racingGameRecord, maxScore] = [
      ...racingGameResult,
    ];
    this.FORWARD_MARK = "-";
    this.lastRoundGameRecord = racingGameRecord[racingCount];
    this.winnerInnerHTML = "";
    this.setWinnerResult(this.lastRoundGameRecord, maxScore);

    this.gameRecordInnerHTML = "";
    this.gameRecordDisplay(racingCount, racingGameRecord);

    // this.setRender();
  }

  setWinnerResult(lastRoundGameRecord, maxScore) {
    const winner = [];
    for (const lastGameScore in lastRoundGameRecord) {
      const playerLastRcord = lastRoundGameRecord[lastGameScore];
      if (playerLastRcord["score"] === maxScore) {
        winner.push(playerLastRcord["carName"]);
      }
    }
    console.log("우승자", winner);
    const winnerResult = winner.join(", ");
    this.winnerInnerHTML = `<br><p>최종 우승자: ${winnerResult}</p>`;
  }

  getRepeatScoreDisplay(score) {
    return this.FORWARD_MARK.repeat(score);
  }

  gameRecordDisplay(racingCount, racingGameRecord) {
    for (let round = 1; round <= racingCount; round++) {
      const nowRoundRecord = racingGameRecord[round];
      // console.log(nowRoundRecord);
      let roundInnerHTML = ``;

      for (let carIndex in nowRoundRecord) {
        const carRecord = nowRoundRecord[carIndex];
        //   console.log(carRecord);
        const carRecordInnerHTMl = `
        <p>${carRecord.carName}: ${this.getRepeatScoreDisplay(
          carRecord.score
        )}</p>`;

        //   console.log(carRecordInnerHTMl);
        roundInnerHTML += carRecordInnerHTMl;
      }

      this.gameRecordInnerHTML += `<br><div>${roundInnerHTML}</div>`;
    }
  }

  setRender() {}
}
