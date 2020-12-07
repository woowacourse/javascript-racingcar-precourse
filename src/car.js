export default class Car {
    constructor(name) {
        this.name = name;
        this.distance = '';
    }
    // 자동차를 앞으로 전진시키는 함수 
    advance() {
        this.distance += '-';
    }
    // 자동차가 이동한 거리를 반환하는 함수
    getDistance() {
        return this.distance;
    }
}