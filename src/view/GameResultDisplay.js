import { createElement, combineElement, $ } from '../utils/element-tools.js';
import { DISPLAY } from '../data/constants.js';

const createRoundWrap = (count) => {
  const combineList = Array.from({ length: count }, (value, index) => {
    const $wrap = createElement('DIV');
    $wrap.setAttribute('data-round', index);

    return $wrap;
  });

  return combineElement(combineList);
};

const insertPlayLogs = ($wrap, playerLogs) => {
  playerLogs.forEach((text, round) => {
    const $roundResult = $wrap.querySelector(`div[data-round="${round}"]`);
    const $progressText = createElement('P', text);

    $roundResult.append($progressText);
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
    gameResult.logs.forEach((player) => insertPlayLogs($roundWrapList, player));

    const $winnerText = createWinnersText(gameResult.winners);
    $roundWrapList.append($winnerText);

    const { $resultWrap, $restartButton } = createResultWrap($roundWrapList);
    $('#app').append($resultWrap);

    callback($restartButton);
  }
}
