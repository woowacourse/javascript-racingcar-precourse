export function getRandomNum(carArr) {
  let maxValue = 0;
  carArr.forEach((v) => {
    const steps = Math.floor(Math.random() * 10);
    if (steps >= 4) {
      v.go = v.go + 1;
    }
    maxValue = Math.max(v.go, maxValue);
  });
  return maxValue;
}
export function moveCar(carArr) {
  const resultRaceDiv = document.querySelector("#resultRaceDiv");
  const p = document.createElement("p");
  resultRaceDiv.appendChild(p);
  carArr.forEach((v) => {
    p.innerHTML += `${v.name}: `;
    for (let i = 0; i < v.go; i++) {
      p.innerHTML += `-`;
    }
    p.innerHTML += `<br>`;
  });
}
