const getWinner = carArr => {
  carArr = carArr.sort((a, b) => b.move - a.move);
  const winnerMove = carArr[0].move;
  const winners = [];
  carArr.forEach(car => {
    if (car.move === winnerMove) winners.push(car.name);
  });
  return winners;
};

export default getWinner;
