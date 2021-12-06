const refreshWinner = (winnerObj, car) => {
  if (winnerObj.winnerPosition === car.position) {
    winnerObj.winners.push(car);
  }

  if (winnerObj.winnerPosition < car.position) {
    winnerObj.winnerPosition = car.position;
    winnerObj.winners = [car];
  }
};
const selectWinners = (cars) => {
  const winnerObj = {
    winnerPosition: 0,
    winners: []
  };

  for (const index in cars) {
    refreshWinner(winnerObj, cars[index]);
  }
  return winnerObj.winners;
};

export default selectWinners;
