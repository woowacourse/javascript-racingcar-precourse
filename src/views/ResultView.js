import { ELEMENT_ID } from '../utils/constants.js';
import { $, createElementWithID } from '../utils/dom.js';
import View from './View.js';

const ResultView = { ...View };
ResultView.setup = function (el) {
  this.init(el);
  this.addBox();
  return this;
};
ResultView.addBox = function () {
  this.el.appendChild(createElementWithID('div', 'result-box'));
  this.resultBox = $(ELEMENT_ID.resultBox);
};
ResultView.render = function (results) {
  this.resultBox.innerHTML = this.getResultsTemplate(results);
};
ResultView.getResultsTemplate = function (results) {
  return (
    results.map((race) => this.getEachRaceTemplate(race)).join('</br>') +
    '</br>'
  );
};
ResultView.getEachRaceTemplate = function (race) {
  return race
    .map((car) => `<div>${car.name}: ${'-'.repeat(car.forwardCount)}</div>`)
    .join('');
};

export default ResultView;
