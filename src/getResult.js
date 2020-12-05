import Car from "./car.js";

export default function getResult() {
  let cars = []; // Car 인스턴스들의 저장을 위한 배열

  // Car 객체의 인스턴스 만들기
  this.makeCars = (words) => {
    for (let i = 0; i < words.length; i++) {
      cars[i] = new Car(words[i], "");
    }
  };

  this.getRandomNum = () => {
    return Math.floor(Math.random() * 9);
  };

  this.printResult = (words, result) => {
    for (let i = 0; i < words.length; i++) {
      if (this.getRandomNum() >= 4) {
        cars[i].position += "-";
        result.innerHTML += `<div>${words[i]}: ${cars[i].position}</div>`;
      } else {
        result.innerHTML += `<div>${words[i]}: ${cars[i].position}</div>`;
      }
    }
    result.innerHTML += "<br>";
  };

  this.printWinner = (result) => {
    let maxValue = 0;
    for (let i = 0; i < cars.length; i++) {
      if (maxValue < cars[i].position.length) {
        maxValue = cars[i].position.length;
      }
    }

    let winners = [];
    for (let j = 0; j < cars.length; j++) {
      if (maxValue === cars[j].position.length) {
        winners.push(cars[j].name);
      }
    }

    result.innerHTML += `<h4>최종 우승자: ${winners}</h4>`;
  };
}
