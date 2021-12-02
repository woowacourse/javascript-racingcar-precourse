export default function checkValidCarNames(carnamesList) {
  let itIsTrueFalse = true;
  carnamesList.forEach((item) => {
    if (item.length > 5) {
      itIsTrueFalse = false;
    }
  });
  return itIsTrueFalse;
}
