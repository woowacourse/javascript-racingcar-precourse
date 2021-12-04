import { CAR } from "../constants/constant.js";
export class Car {
    constructor(name) {
        this.name = name;
        this.position = 0;
    }
    move(number) {
        if (number >= 4) {
            this.position++;
        }
    }
    get postion() {
        return this.position;
    }
}
