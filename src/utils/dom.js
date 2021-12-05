import { STYLE, COMMENT, SELECTOR } from '../constants/constant.js';

export const hideNode = ($node) => {
  $node.style.display = 'none';
};
export const showNode = ($node) => {
  $node.style.display = 'block';
};

export const createProgressNode = (name, position) => {
  const $node = document.createElement('span');
  const $brNode = document.createElement('br');
  let paragraph = name + ': ';
  while (position--) {
    paragraph += '-';
  }

  const textNode = document.createTextNode(paragraph);
  $node.appendChild(textNode);
  $node.appendChild($brNode);
  return $node;
};

export const createResultNode = (cars) => {
  const $resultNode = document.createElement('div');
  cars.forEach((car) => {
    $resultNode.appendChild(car.positionElement);
  });
  $resultNode.style.margin =
    STYLE.RESULT_MARGIN_VERTICAL + ' ' + STYLE.RESULT_MARGIN_HORIZONTAL;

  return $resultNode;
};

export const disableForm = ($form) => {
  $form.childNodes.forEach((node) => (node.disabled = true));
};

export const createWinnersNode = (winners) => {
  const $winnerContainer = document.createElement('div');
  const $textNode = document.createTextNode(COMMENT.FINAL_WINNER);
  $winnerContainer.appendChild($textNode);
  const $winnersSpan = document.createElement('span');
  const winnersName = winners.map((car) => car.name);
  const winnersList = winnersName.reduce((acc, cur) => acc + ',' + cur);
  const $winners = document.createTextNode(winnersList);
  $winnersSpan.appendChild($winners);
  $winnersSpan.id = SELECTOR.ID.RACING_WINNERS;
  $winnerContainer.appendChild($winnersSpan);
  return $winnerContainer;
};
