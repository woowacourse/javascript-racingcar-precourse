const { pickNumberInRange } = MissionUtils.Random;

export default class Car {
    #identifier;

    #move;

    constructor(name) {
        this.#identifier = name;
        this.#move = 0;
    }

    #isMove = () => pickNumberInRange(0, 9) >= 4;

    tryMove() {
        if (this.#isMove()) this.#move++;
    }

    getPosition() {
        return this.#move;
    }

    getName() {
        return this.#identifier;
    }
}
