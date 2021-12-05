export function play(object) {
  object.cars.forEach((item) => {
    if (isAbleToGoFoward()) item.goFoward();
  });
}

export function isAbleToGoFoward() {
  if (MissionUtils.Random.pickNumberInRange(0, 9) >= 4) return true;
  else return false;
}
