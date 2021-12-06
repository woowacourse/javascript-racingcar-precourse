export function printInHTML(resultStr, attributeTag) {
  let addtaglocation = document.getElementById('app');
  let result = document.createElement('span');
  result.setAttribute('id', attributeTag);
  result.innerHTML = resultStr;
  addtaglocation.appendChild(result);
}

export function makeResultToString(winners) {
  let resultStr = '';
  for (let i = 0; i < winners.length; i++) {
    resultStr = resultStr + winners[i] + ',';
  }
  return resultStr.slice(0, resultStr.length - 1);
}

export function printResult(winners) {
  const resultStr = makeResultToString(winners);
  printInHTML(resultStr, 'racing-winners');
}

export function makeRacingToString(players) {
  let resultStr = '';
  let bar = '';
  for (let i = 0; i < players.length; i++) {
    bar = '-'.repeat(players[i].location);
    resultStr += `${players[i].name}: ${bar} </br>`;
  }
  resultStr += '</br>';
  return resultStr;
}

export function printRacing(winners) {
  const resultStr = makeRacingToString(winners);
  printInHTML(resultStr, 'racing-process');
}

export function printFinalWinnerIs() {
  const resultStr = '최종 우승자는: ';
  printInHTML(resultStr, 'finalWinnerIs');
}
