export default class CarRacing {
  constructor(cars) {
    this.cars = cars;
    this.template = new Template();
  }

  play = (count) => {
    return this.start(count);
  };

  start = (count) => {
    const eachCountResults = [];

    for (let i = 0; i < count; i++) {
      const eachCarResult = this.cars.map((car) => {
        const randomNumber = MissionUtils.Random.pickNumberInRange(0, 9);
        car.drive(randomNumber);
        return Object.assign(Object.create(Object.getPrototypeOf(car)), car); // reference : https://stackoverflow.com/questions/41474986/how-to-clone-a-javascript-es6-class-instance
      });
      eachCountResults.push(eachCarResult);
    }
    return eachCountResults;
  };

  printRacingResult = (racingResults) => {
    // 각 횟수마다 레이싱 결과 템플릿 리턴
  };

  printFinalWinner = (arr) => {
    // TODO : 최종 우승자 템플릿 리턴
  };
}

class Template {
}
