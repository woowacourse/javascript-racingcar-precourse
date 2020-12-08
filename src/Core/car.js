export default function Car(name) {
  this.name = name;
  this.randomNumbers = [];
  this.move = "";
  this.update = function () {
    let randomNum = Math.floor(Math.random() * 10);
    this.randomNumbers.push(randomNum);
    if (randomNum >= 4) {
      this.move += "-";
    }
  };
}
