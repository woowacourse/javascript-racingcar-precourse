import { ELEMENT_ID } from '../utils/constants.js';
import { $, createElementWithID } from '../utils/dom.js';
import View from './View.js';

const WinnersView = { ...View };

WinnersView.setup = function (el) {
  this.init(el);
  this.addBox();
  return this;
};
WinnersView.addBox = function () {
  this.el.appendChild(createElementWithID('div', 'winners-box'));
  this.winnersBox = $(ELEMENT_ID.winnersBox);
};
WinnersView.render = function (winners) {
  this.winnersBox.innerHTML = `최종 우승자: <span id="racing-winners">${winners.join(
    ',',
  )}</span>`;
};

export default WinnersView;
