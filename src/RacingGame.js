export default class RacingGame {
    constructor(carNames, racingCount) {
        this.carNames = carNames;
        this.racingCount = racingCount;

        console.log("게임 실행");
        console.log(this.carNames);
        console.log(this.racingCount);
    }
}