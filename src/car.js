export default class Car {

    //차 이름과 횟수 받음
    constructor(carName, racingCount) {
        this.carName = carName;
        this.racingCount = racingCount;
    }

    makeRandomNum() {
        return MissionUtils.Random.pickNumberInRange(0, 9);
    }
}