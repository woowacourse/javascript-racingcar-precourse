const RacingWinners = ({ winners }) => {
  return `<div>
        <span>최종 우승자: </span>
        <span id="racing-winners">${winners}</span>
    </div>`;
};

export default RacingWinners;
