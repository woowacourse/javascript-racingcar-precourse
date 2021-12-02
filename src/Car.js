const { pickNumberInRange } = MissionUtils.Random;

export default class Car {
    constructor(name) {
        this.name = name;
        this.move = 0;
    }

    isMove = () => pickNumberInRange(0, 9) >= 4;

    tryMove() {
        if (this.isMove()) this.move++;
    }
}
