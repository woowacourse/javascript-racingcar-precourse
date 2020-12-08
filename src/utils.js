function isValidcarNameLength(name) {
  return 0 < name.length && name.length < 6;
}
function carNamesCheck(names) {
  if (!names.every(isValidcarNameLength)) {
    return false;
  }
  return true;
}

function isNumber(string) {
  if (!string) {
    return false;
  }
  return !isNaN(Number(string));
}

function getRandomNumber() {
  return Math.floor(Math.random() * 9);
}
function isCarMoved() {
  const randomNumber = getRandomNumber();
  return randomNumber > 3;
}

function findMaxCount(carList) {
  let maxCount = -1;
  carList.map(({ count }) => {
    if (count > maxCount) {
      maxCount = count;
    }
  });
  return maxCount;
}

function getWinner(carList) {
  const maxCount = findMaxCount(carList);
  const winnerList = carList.filter(({ count }) => count === maxCount);
  return winnerList;
}
export { carNamesCheck, isNumber, isCarMoved, getWinner };
