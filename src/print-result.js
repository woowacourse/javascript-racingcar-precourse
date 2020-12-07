export default class PrintResult {
    constructor(racingResult) {
        this.racingResult = racingResult;
    }
    // 게임 결과를 화면에 출력하는 함수
    printGameResult(cars) {
        let result = `<p>`;
        cars.forEach(car => {
            result += `${car.name}: ${car.distanceStr}<br>`
        });
        result += `</p>`;
        this.racingResult.innerHTML += result;
    }
    // 우승자를 찾는 함수
    getWinner(cars) {
        let winners = [];
        let maxDist = 0;
        for(let i = 0; i < cars.length; i++) {
            const distance = cars[i].distance;
            if(distance < maxDist) {
                continue;
            }
            if(distance > maxDist) {
                maxDist = distance;
                winners = [];
            }
            winners.push(cars[i].name);
        }
        return winners;
    }
    // 우승자를 화면에 출력하는 함수
    printWinner(cars) {
        const winners = this.getWinner(cars);
        let result = `<p>최종 우승자:`;
        for(let i = 0; i < winners.length; i++) {
            result += ` ${winners[i]}`;
            if(i != winners.length - 1) {
                result += `,`;
            }
        }
        result += `</p>`;
        this.racingResult.innerHTML += result;
    }
}