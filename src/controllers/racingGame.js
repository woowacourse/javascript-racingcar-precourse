import { showPlaying, showWinner } from "../views/view.js";

export function play(object) {
  object.cars.forEach((item) => {
    if (isAbleToGoFoward()) item.goFoward();
  });
  showPlaying(object);
}

export function isAbleToGoFoward() {
  if (MissionUtils.Random.pickNumberInRange(0, 9) >= 4) return true;
  else return false;
}

export function getWinner(object) {
  let mostGoneNumber = 0;

  object.cars.forEach((item) => {
    if (item.getLocation() > mostGoneNumber)
      mostGoneNumber = item.getLocation();
  });

  const winners = object.cars.filter((item) => {
    return item.getLocation() === mostGoneNumber;
  });

  return winners;
}
