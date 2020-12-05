function nameLengthCheck(nameArr) {
  let check = false;
  nameArr.forEach((name, index) => {
    if (name.length > 5 || name.length < 1) {
      check = true;
    }
  });
  return check;
}

export function validateCarInput(carNamesInput) {
  const nameArr = carNamesInput.trim().split(",");
  const impossibleName = nameLengthCheck(nameArr);
  let check = true;
  if (nameArr.length < 2 || impossibleName) {
    alert("올바른 이름을 입력하세요.[올바른 예) east,west,south,north]");
    check = false;
  }
  return check;
}
