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
