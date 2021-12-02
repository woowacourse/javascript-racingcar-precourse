const RacingWinners = ({ carNames, maxMoveCount }) => {
  const winners = carNames
    .filter((car) => car.moveCount === maxMoveCount)
    .map((car) => car.name)
    .join(",");

  return `<div>
        <span>최종 우승자: </span>
        <span id="racing-winners">${winners}</span>
    </div>`;
};

export default RacingWinners;
