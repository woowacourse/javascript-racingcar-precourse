function checkDuplicateName(carName, name, index) {
  let check = true;
  carName.forEach((compareName, compareIndex) => {
    if (name === compareName && index !== compareIndex) check = false;
  });
  return check;
}

export default function checkCarName(carName) {
  let check = true;
  carName.forEach((name, index) => {
    if (name.length === 0 || name.length > 5) check = false;
    if (!checkDuplicateName(carName, name, index)) check = false;
  });
  return check;
}
