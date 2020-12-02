// function Car(name) {
//   this.name = name;
// }

export default function getCarName() {
  const $carNamesInput = document.querySelector('#car-names-input');
  const carNamesArray = [...new Set($carNamesInput.value.split(','))];
}
