export default function Car(name) {
  this.name = name;
  this.move = 0;

  this.moveCar = function() {
    if
    (isMoved(randomNumberCreater())) this.move = this.move + 1;
  };
}

function randomNumberCreater() {
  return Math.floor(Math.random() * 10);
}


function isMoved(randomNumber) {
  return randomNumber > 4 ? true : false;
}
