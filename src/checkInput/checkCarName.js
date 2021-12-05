function checkCarNameDuplicate(carNameList) {
  for (let name of carNameList) {
    let count = carNameList.filter(element => name === element).length;

    if (count >= 2) {
      return false;
    }
  }

  return true;
}

function checkCarNameLen(carNameList) {
  for (let name of carNameList) {
    if (name.length >= 6) {
      return false;
    }
  }

  return true;
}

function checkCarNameComma(carNameList) {
  if (carNameList.length === 1) {
    return false;
  }

  return true;
}

export default function checkCarName(carNameList) {
  if (
    checkCarNameDuplicate(carNameList) &&
    checkCarNameLen(carNameList) &&
    checkCarNameComma(carNameList)
  ) {
    return true;
  }

  return false;
}
