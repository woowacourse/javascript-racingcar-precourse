import { $, createElementWithContents } from './common.js';

const sortCarsByMove = carObjectList => carObjectList.sort((a, b) => b.move - a.move);

const getWinnersObjectList = carObjectList => {
  const sortedCarObjectList = sortCarsByMove(carObjectList);
  const winnersMove = sortedCarObjectList[0].move;

  return sortedCarObjectList.filter(x => x.move === winnersMove);
};

const makeWinnersMessage = winnersObjectList => {
  const winnersArray = winnersObjectList.map(x => x.name);
  const winnersMessage = winnersArray.join(', ');

  return winnersMessage;
};

const makeWinnersSpan = winnersMessage => {
  const winnersSpan = createElementWithContents('span', `${winnersMessage}`);
  winnersSpan.id = 'racing-winners';

  return winnersSpan;
};

const makeWinnersComponent = winnersObjectList => {
  const winnersMessage = makeWinnersMessage(winnersObjectList);
  const resultDiv = $('result');
  const finalWinnersText = createElementWithContents('span', '최종 우승자: ');
  resultDiv.appendChild(finalWinnersText);
  resultDiv.appendChild(makeWinnersSpan(winnersMessage));
};

export default function showWinners(carObjectList) {
  const winnersObjectList = getWinnersObjectList(carObjectList);
  makeWinnersComponent(winnersObjectList);
}
