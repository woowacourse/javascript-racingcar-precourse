export default class Car {

    // 차 이름과 횟수 받음
    constructor(carName, racingCount) {
        this.carName = carName;
        this.racingCount = racingCount;
    }

    makeRandomNum() {
        return MissionUtils.Random.pickNumberInRange(0, 9);
    }

    // 각 회차마다 갈 수 있는지 없는지 저장
    checkCanMove() {
        const canMove = [];

        for(let i = 0; i < this.racingCount; i++) {
            const randomNum = this.makeRandomNum();

            // 나중에 여기 함수로 분리
            if(randomNum > 3) {
                canMove.push(true);
            } else {
                canMove.push(false);
            }
        }

        return canMove;
    }
}