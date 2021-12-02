export default function (carNamesString) {
  return carNamesString.split(',').map((carName) => carName.trim());
}
