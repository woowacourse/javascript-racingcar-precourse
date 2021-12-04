export class CAR {
    constructor(name) {
        this.name = name;
        this.forward = 0;
        this.gameProgress = '';
    }

    PLUS_FORWARD() {
        this.forward++;
        this.gameProgress += '-';
    }
}
