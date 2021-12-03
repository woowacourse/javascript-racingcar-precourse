import createRandomNumber from './createRandomNumber.js';

function decideStoporFoward() {
  const num = createRandomNumber();
  console.log(num);
  if (num >= 4) {
    return true;
  } else if (num < 4) {
    return false;
  }
}

export default function playRacingCarGame(carInstanceList) {
  carInstanceList.forEach((item) => {
    if (decideStoporFoward()) {
      item.plusCount();
    }
  });
}
