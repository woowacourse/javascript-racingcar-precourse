// import getCarName from './input/getCarName.js';

// function Car(name) {
//   this.name = name;
// }

//   class Car {
//     constructor(name) {
//       this.name = name;
//     }
//   }

function hideScreen() {
  const $inputRaceNumberScreen = document.querySelector(
    '.car-game-container > div:last-child',
  );
  const $resultScreen = document.querySelector('#app > div:last-child');

  $inputRaceNumberScreen.style.display = 'none';
  $resultScreen.style.display = 'none';
}

export default function RacingCarGame() {
  hideScreen();
}

new RacingCarGame();
