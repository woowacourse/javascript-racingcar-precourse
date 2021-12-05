import createRandomNumber from './createRandomNumber.js';

function decideStoporFoward() {
  const num = createRandomNumber();
  if (num >= 4) {
    return true;
  } else if (num < 4) {
    return false;
  }
}

export default function computeGameResult(carInstanceList) {
  carInstanceList.forEach((item) => {
    if (decideStoporFoward()) {
      item.plusCount();
    }
  });
}
