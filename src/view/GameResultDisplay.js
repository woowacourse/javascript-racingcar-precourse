import { createElement, combineElement, $ } from '../utils/element-tools.js';
import { DISPLAY } from '../data/constants.js';

const createRoundWrap = (count) => {
  const combineList = Array.from({ length: count }, (value, index) => {
    const $round = createElement('DIV');
    $round.setAttribute('data-round', index);
    return $round;
  });

  const $roundWrap = combineElement(combineList);
  [...$roundWrap.children].forEach(($round) => {
    $round.after(createElement('BR'));
  });

  return $roundWrap;
};

const insertRacerLog = ($wrap, racerLog) => {
  racerLog.forEach((scoreText, gameRound) => {
    const $roundResult = $wrap.querySelector(`div[data-round="${gameRound}"]`);
    const $scoreText = createElement('SPAN', scoreText);
    const $br = createElement('BR');

    $roundResult.append($scoreText, $br);
  });
};

const createWinnersText = (winners) => {
  const $winnersLine = createElement('P', DISPLAY.WINNER_TITLE);
  const $winnersResult = createElement('SPAN', winners);

  $winnersResult.id = 'racing-winners';
  $winnersLine.append($winnersResult);

  return $winnersLine;
};

const createResultWrap = ($content) => {
  const $restartText = createElement('P', DISPLAY.GAME_RESTART_TEXT);
  const $restartButton = createElement('BUTTON', DISPLAY.GAME_RESTART_BUTTON);
  $restartText.append($restartButton);

  const $resultWrap = createElement('DIV');
  $resultWrap.id = 'game-result-list';
  $resultWrap.append($content, $restartText);

  return { $resultWrap, $restartButton };
};

export default class GameResultDisplay {
  static init() {
    const $gameResult = $('#game-result-list');
    if ($gameResult) $gameResult.remove();
  }

  static draw(gameResult, callback) {
    const $roundWrapList = createRoundWrap(gameResult.count);
    gameResult.logs.forEach((log) => insertRacerLog($roundWrapList, log));

    const $winnerText = createWinnersText(gameResult.winners);
    $roundWrapList.append($winnerText);

    const { $resultWrap, $restartButton } = createResultWrap($roundWrapList);
    $('#app').append($resultWrap);

    callback($restartButton);
  }
}
