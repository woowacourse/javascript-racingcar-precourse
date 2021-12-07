import { $ } from '../utils/dom.js';

const ResultView = {};
ResultView.setup = function (el) {
  this.init(el);
  this.addBox();
  return this;
};
ResultView.init = function (el) {
  this.el = el;
};
ResultView.addBox = function () {
  const resultBox = document.createElement('div');
  resultBox.id = 'result-box';
  this.el.appendChild(resultBox);
};
ResultView.render = function (results) {
  $('#result-box').innerHTML = this.getResultsTemplate(results);
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
