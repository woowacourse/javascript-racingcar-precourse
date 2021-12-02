function paragraphTemplate(raceResult) {
  const stringList = raceResult.map(
    (result) => `${result.name}: ${'-'.repeat(result.distance)}`
  );

  return `<p>${stringList.join('<br>')}</p>`;
}

function finalWinnerTemplate(winnerNameList) {
  const winnerMessage = winnerNameList.join(',');

  return `<p>최종 우승자: <span id="racing-winners">${winnerMessage}</span></p>`;
}

const template = {
  resultTemplate(raceResultList, winnerNameList) {
    const paragraphList = raceResultList.reduce(
      (a, raceResult) => a + paragraphTemplate(raceResult),
      ''
    );

    return `${paragraphList}${finalWinnerTemplate(winnerNameList)}`;
  },
};

export default template;
