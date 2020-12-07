export let forward = new Array();
export let instanceOfCars = new Array();
export function goForward(numTry) {
  for (let i = 0; i < instanceOfCars.length; i += 1) {
    forward[i] = '';
  }
  for (let i = 0; i < numTry; i += 1) {
    for (let j = 0; j < instanceOfCars.length; j += 1) {
      let eachRace = document.getElementById('result');
      if (instanceOfCars[j].getRandomNumber() > 3) {
        forward[j] += '-';
      }
      eachRace.innerHTML = eachRace.innerHTML + instanceOfCars[j].name + ': ' + forward[j] + '<br />';
    }
    document.getElementById('result').innerHTML = document.getElementById('result').innerHTML + '<br />';
  }
}

export function findWinner(arr) {
  const winner = new Array();
  const eachLength = arr.map(x => x.length);
  const maxNum = Math.max(...eachLength);

  for (let i = 0; i < eachLength.length; i += 1) {
    if (eachLength[i] === maxNum) {
      winner.push(instanceOfCars[i].name);
    }
  }
  document.getElementById('result').innerHTML = document.getElementById('result').innerHTML + '최종 우승자: ' + winner;
}