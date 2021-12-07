import { $ } from '../utils/dom.js';
const WinnersView = {};

WinnersView.setup = function (el) {
  this.el = el;
  this.addBox();
  return this;
};
WinnersView.addBox = function () {
  const winnersBox = document.createElement('div');
  winnersBox.id = 'winners-box';
  this.el.appendChild(winnersBox);
  this.winnersBox = $('#winners-box');
};

export default WinnersView;
