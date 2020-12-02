// function Car(name) {
//   this.name = name;
// }

function checkLength(carName) {
  if (carName.length === 0) {
    return false;
  }
  if (carName.length > 5) {
    return false;
  }
  return true;
}

function checkValidCarName(carNamesArray) {
  console.log(carNamesArray);
  if (!carNamesArray.every(checkLength)) {
    return false;
  }
  return true;
}

export default function getCarName() {
  const $carNamesInput = document.querySelector('#car-names-input');
  const carNamesArray = [...new Set($carNamesInput.value.split(','))];
}
