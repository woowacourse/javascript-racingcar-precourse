function paragraphTemplate(raceResult) {
  const stringList = raceResult.map(
    (result) => `${result.name}: ${'-'.repeat(result.distance)}`
  );

  return `<p>${stringList.join('<br>')}</p>`;
}

function finalWinnerTemplate(nameList) {
  const names = nameList.join(',');

  return `<p>최종 우승자: <span id="racing-winners">${names}</span></p>`;
}

const template = {
  resultTemplate(raceResultList, finalWinnerNameList) {
    const paragraphList = raceResultList.reduce(
      (acc, raceResult) => acc + paragraphTemplate(raceResult),
      ''
    );

    return `${paragraphList}${finalWinnerTemplate(finalWinnerNameList)}`;
  },
};

export default template;
