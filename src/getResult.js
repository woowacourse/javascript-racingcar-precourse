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
      console.log(cars[i]);
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
}
