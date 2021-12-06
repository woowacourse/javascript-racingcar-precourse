import * as render from '../view/render.js';
import addSelector from './addSelector.js';

export default () => {
  render.racingCountAndResultHide();
  addSelector();
};
