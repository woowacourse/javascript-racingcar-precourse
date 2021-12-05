import RoundDetail from "./RoundDetail.js";

const ResultRound = (carNames, round) => {
  const resultRound = carNames
    .map((car) => {
      const { name, moveCounts } = car;
      return RoundDetail(name, moveCounts[round]);
    })
    .join("");

  return `<div class="result-round" style="margin: 10px 0;">${resultRound}</div>`;
};

export default ResultRound;
