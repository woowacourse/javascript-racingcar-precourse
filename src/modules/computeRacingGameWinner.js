function getMaxCount(carInstanceList) {
  let countList = [];
  carInstanceList.forEach((item) => {
    countList.push(item.count);
  });
  return Math.max(...countList);
}

export default function computeRacingGameWinner(carInstanceList) {
  const maxCount = getMaxCount(carInstanceList);
  let winners = [];
  carInstanceList.forEach((item) => {
    if (item.count === maxCount) {
      winners.push(item.name);
    }
  });
  return winners.join(',');
}
