export function makeResultToString(winners) {
  let resultStr = '';
  for (let i = 0; i < winners.length; i++) {
    resultStr = resultStr + winners[i] + ',';
  }
  return resultStr.slice(0, resultStr.length - 1);
}

export function printInHTML(resultStr) {
  let addtaglocation = document.getElementById('app');
  let result = document.createElement('span');
  result.setAttribute('id', 'racing-winners');
  result.innerHTML = resultStr;
  addtaglocation.appendChild(result);
}

export function printResult(winners) {
  const resultStr = makeResultToString(winners);
  printInHTML(resultStr);
}
