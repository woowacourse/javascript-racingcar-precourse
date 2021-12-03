import { $, createElementWithContents } from './common.js';

const sortCarsByMove = carObjectArray => carObjectArray.sort((a, b) => b.move - a.move);

const getWinnersObjectArray = carObjectArray => {
  const sortedCarObjectArray = sortCarsByMove(carObjectArray);
  const winnersMove = sortedCarObjectArray[0].move;

  return sortedCarObjectArray.filter(x => x.move === winnersMove);
};

const makeWinnersMessage = winnersObjectArray => {
  const winnersArray = winnersObjectArray.map(x => x.name);
  const winnersMessage = winnersArray.join(', ');

  return winnersMessage;
};

const makeWinnersSpan = winnersMessage => {
  const winnersSpan = createElementWithContents('span', `${winnersMessage}`);
  winnersSpan.id = 'racing-winners';

  return winnersSpan;
};

const makeWinnersComponent = winnersObjectArray => {
  const winnersMessage = makeWinnersMessage(winnersObjectArray);
  const resultDiv = $('result');
  const finalWinnersText = createElementWithContents('span', '최종 우승자: ');

  resultDiv.appendChild(finalWinnersText);
  resultDiv.appendChild(makeWinnersSpan(winnersMessage));
};

export default function showWinners(carObjectArray) {
  const winnersObjectArray = getWinnersObjectArray(carObjectArray);
  makeWinnersComponent(winnersObjectArray);
}
