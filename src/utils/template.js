const gameLineTemplate = (carName, carDistance) => {
  return `<div>${carName}: ${'-'.repeat(carDistance)}</div>`;
};

const winnerTemplate = (winnerList) => {
  const winner = winnerList.join(', ');

  return `최종 우승자: <span id="racing-winners">${winner}</span>`;
};

export { gameLineTemplate, winnerTemplate };
