export default function getResult() {
  let cars = [];

  function Car(name, position) {
    this.name = name;
    this.position = position;
  }

  this.makeCar = (words) => {
    let i;
    for (i = 0; i < words.length; i++) {
      cars[i] = new Car(words[i], "");
    }
  };

  this.getRandomNum = () => {
    return Math.floor(Math.random() * 9);
  };

  this.printResult = (words, result) => {
    let i;
    for (i = 0; i < words.length; i++) {
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
    let i;
    let maxValue = 0;
    let winners = [];
    for (i = 0; i < cars.length; i++) {
      if (maxValue < cars[i].position.length) {
        maxValue = cars[i].position.length;
      }
    }
    for (i = 0; i < cars.length; i++) {
      if (maxValue === cars[i].position.length) {
        winners.push(cars[i].name);
      }
    }

    result.innerHTML += `<h4>최종 우승자: ${winners}</h4>`;
  };
}
