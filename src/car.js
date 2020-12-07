export default function Car(name) {
    this.name = name;
    this.move = 0;
}

function randomNumberCreater() {
    return Math.floor(Math.random());
}

function isMoved(randomNumber) {
    return ((randomNumber > 4) ? true : false );
}

export function moveCar() {
    if (isMoved(randomNumberCreater()))
        this.move = this.move + 1;
}

function getCarMove() {
    return this.move;
}