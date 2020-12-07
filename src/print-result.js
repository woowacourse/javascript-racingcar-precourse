export default class PrintResult {
    constructor(cars, racingResult) {
        this.racingResult = racingResult;
        this.carArr = cars;
    }
    // 게임 결과를 화면에 출력하는 함수
    printGameResult() {
        let result = `<p>`;
        this.carArr.forEach(car => {
            result += `${car.name}: ${car.getDistance()}<br>`
        });
        result += `</p>`;
        this.racingResult.innerHTML += result;
    }
}