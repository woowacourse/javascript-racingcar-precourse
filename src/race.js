import Car from './car.js';

export default class Race {
  constructor(carList, raceNumber) {
    this.carList = carList;
    this.raceNumber = raceNumber;

    this.$result = document.createElement('div');
    this.$result.id = 'result';
  }

  makeCarList(carList) {
    const carObjectList = carList.map((item) => {
      return new Car(item);
    });
    return carObjectList;
  }

  raceOneTime(carObjectList) {
    carObjectList.forEach((item) => item.raceAdvance());
    return carObjectList;
  }

  appendResultElement(carObjectList) {
    const $p = document.createElement('p');

    carObjectList.forEach((item) => {
      const $span = document.createElement('span');
      const $br = document.createElement('br');
      $span.textContent = `${item.name}: ${item.advance}`;
      $p.appendChild($span);
      $p.appendChild($br);
    });

    this.$result.appendChild($p);
  }

  checkWinners(carObjectList) {
    let winners = [];
    let maxAdvance = carObjectList.sort((a, b) => {
      return b.advance.length - a.advance.length;
    })[0].advance.length;

    carObjectList.forEach((item) => {
      if (item.advance.length === maxAdvance) {
        winners.push(item.name);
      }
    });

    return winners;
  }

  appendWinnersElement(carObjectList) {
    const winners = this.checkWinners(carObjectList);

    const $div = document.createElement('div');
    $div.textContent = '최종 우승자: ';

    const $span = document.createElement('span');
    $span.id = 'racing-winners';
    $span.textContent = `${winners.join(', ')}`;

    $div.appendChild($span);
    this.$result.appendChild($div);
  }

  /**
   * Car인스턴스 리스트 생성
   * 횟수만큼 각 레이스 진행
   * $result에 각 레이스 결과, 우승자 결과 추가
   * $result element반환
   */
  startGame() {
    let carObjectList = this.makeCarList(this.carList);

    for (let i = 0; i < this.raceNumber; i++) {
      carObjectList = this.raceOneTime(carObjectList);
      this.appendResultElement(carObjectList);
    }
    this.appendWinnersElement(carObjectList);

    return this.$result;
  }
}
