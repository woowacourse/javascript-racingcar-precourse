import { createElement, combineElement, $ } from '../utils/element-tools.js';

const createResultWrap = (count) => {
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
  const $winnersLine = createElement('P', '최종 우승자: ');
  const $winnersResult = createElement('SPAN', winners);

  $winnersResult.id = 'racing-winners';
  $winnersLine.append($winnersResult);

  return $winnersLine;
};

export default class GameResultDisplay {
  static init() {
    const $gameResult = $('#game-result-list');
    if ($gameResult) $gameResult.remove();
  }

  static draw(gameResult) {
    const $wrapFragment = createResultWrap(gameResult.count);
    gameResult.logs.forEach((player) => insertPlayLogs($wrapFragment, player));

    const $winnerText = createWinnersText(gameResult.winners);
    $wrapFragment.append($winnerText);

    const $result = createElement('DIV');
    $result.id = 'game-result-list';
    $result.append($wrapFragment);

    $('#app').append($result);
  }
}
