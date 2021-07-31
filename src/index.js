// export default function RacingCarGame() {

// }
// // export default class RacingCarGame {
// // }

// new RacingCarGame();

const nameInput = document.querySelector("#car-names-input");
const nameBtn = document.querySelector("#car-names-submit");
const countInput = document.querySelector("#racing-count-input");
const countBtn = document.querySelector("#racing-count-submit");
const result = document.querySelector(".car-game-list");

let namesArray = [];

nameBtn.addEventListener("click", () => {
  const names = nameInput.value;
  nameValue = names.split(",");
  for (let i = 0; i < nameValue.length; i++) {
    namesArray.push({ value: nameValue[i], count: 0 });
  }
});

countBtn.addEventListener("click", () => {
  for (let i = 0; i < Number(countInput.value); i++) {
    for (let j = 0; j < namesArray.length; j++) {
      if (Math.floor(Math.random() * 10) >= 4) {
        namesArray[j].count++;
      }
    }
  }
  showResult("sex", "html", "css");
  console.log(namesArray);
});

function showResult() {
  for (let i = 0; i < arguments.length; i++) {
    result.innerHTML = `${arguments[0]}: ${arguments[1]}`;
    console.log("sex");
  }
}
