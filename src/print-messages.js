let PROGRESS = "";

export function printProgress(carNameArray) {
  for (let i = 0; i < carNameArray.length; i++) {
    PROGRESS += `${carNameArray[i].name}: `;

    for (let a = 0; a < carNameArray[i].position; a++) {
      PROGRESS += `-`;
    }
    PROGRESS += `<br />`;
  }
  PROGRESS += `<br />`;

  return PROGRESS;
}
