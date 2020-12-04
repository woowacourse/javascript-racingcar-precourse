export default class Car {
    constructor(name) {
        this.name = name;
        this.moveCounts = 0;
        this.moveList = [];
    }

    go() {
        const move = Math.floor(Math.random() * 10) >= 4;
        const moveItem = move ? "-" : null;
        this.moveList.push(moveItem);
        const moveCount = move ? 1 : 0;
        this.moveCounts += moveCount;
    }

    render(roundNumber) {
        const moveSign = this.moveList.slice(0, roundNumber).join("");
        return `<div>${this.name}: ${moveSign}</div>`;
    }
}
