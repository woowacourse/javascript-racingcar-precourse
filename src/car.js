export default class Car {
    constructor(name) {
        this.name = name;
        this.distance = 0;
        this.distanceStr = '';
    }
    // 자동차를 앞으로 전진시키는 함수 
    advance() {
        this.distance += 1;
        this.distanceStr += '-';
    }
}