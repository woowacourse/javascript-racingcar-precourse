export function racingCountPlay(cars, racingCountInput) {
  const carsLength = cars.length
  const resultDiv = document.querySelector("#result-div")
  resultDiv.style.display = "block"
  let i;
  let j;

  for (i = 0; i < racingCountInput; i++) {
    for (j = 0; j < carsLength; j++) {
      console.log(i, cars[j])
    }
  }
}