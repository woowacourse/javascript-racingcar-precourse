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

const createElement = (tag, text, id) => {
  const $container = document.createElement(tag);

  if (text) {
    const $textNode = document.createTextNode(text);
    $container.appendChild($textNode);
  }

  if (id) {
    $container.id = id;
  }

  return $container;
};

export class Winners {
  constructor(cars) {
    this.cars = cars;
  }

  get names() {
    return this.cars.map((car) => car.name);
  }

  get list() {
    return this.names.reduce((acc, cur) => `${acc},${cur}`);
  }

  get $element() {
    const $container = createElement('div', COMMENT.FINAL_WINNER);
    const $winnerSpan = createElement(
      'span',
      this.list,
      SELECTOR.ID.RACING_WINNERS
    );
    $container.appendChild($winnerSpan);
    return $container;
  }
}
