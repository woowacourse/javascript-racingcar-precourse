export function getRandomNum(carArr) {
  carArr.forEach((v) => {
    const step = Math.floor(Math.random() * 10);
    if (step >= 4) {
      v.go = v.go + 1;
    }
  });
}

export function moveCar(carArr) {
  const resultDiv = document.querySelector("#app").childNodes[7];
  const p = document.createElement("p");
  resultDiv.appendChild(p);
  carArr.forEach((v) => {
    p.innerHTML += `${v.name}: `;
    for (let i = 0; i < v.go; i++) {
      p.innerHTML += `-`;
    }
    p.innerHTML += `<br>`;
  });
}
