import Winners from '../model/Winners.js';
import { DOM } from '../utils/constant.js';
import Render from '../view/Render.js';

export default class ResultRacing {
  constructor(game) {
    this.game = game;
    this.render = new Render();

    this.$racingResultTitle = DOM.$RACING_RESULT_TITLE;
    this.$app = DOM.$APP;
    this.$div = DOM.$DIV;
    this.$span = DOM.$SPAN;

    this.resultInformations = [];
    this.resultWinners = [];
    this.resultWinnersTemplate = '';
    this.resultTemplate = '';

    this.main();
  }

  renderWinnersTemplate = () => this.render.template(this.$span, this.$app, this.resultWinnersTemplate);

  renderResultTemplate = () => this.render.template(this.$div, this.$app, this.resultTemplate);

  getRacingResult = () => {
    this.resultTemplate = this.game.getResultTemplate();
    this.resultInformations = this.game.getResultInformations();
  };

  resultTitleVisible = () => {
    this.render.visible(this.$racingResultTitle);
  };

  main = () => {
    this.getRacingResult();
    this.renderResultTemplate();

    const winners = new Winners(this.resultInformations);
    this.resultWinners = winners.getWinners();
    this.resultWinnersTemplate = winners.getWinnersTemplate();
    this.renderWinnersTemplate();
    this.resultTitleVisible();
  };
}
