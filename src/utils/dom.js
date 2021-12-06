import { STYLE, COMMENT, SELECTOR } from '../constants/constant.js';

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

export const hideNode = ($node) => {
  $node.style.display = 'none';
};
export const showNode = ($node) => {
  $node.style.display = 'block';
};

export const createProgressNode = (name, position) => {
  let paragraph = name + ': ';
  while (position--) {
    paragraph += '-';
  }

  const $node = createElement('span', paragraph);
  const $brNode = createElement('br');
  $node.appendChild($brNode);
  return $node;
};

export const createResultNode = (cars) => {
  const $resultNode = createElement('div');
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
