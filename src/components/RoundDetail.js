const RoundDetail = (name, roundMoveCount) => {
  return `<p style="margin: 0;">${name}: ${"-".repeat(roundMoveCount)}</p>`;
};

export default RoundDetail;
