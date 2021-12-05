import { $carName } from "../common/constants.js";

const splitCarName = () => $carName.value.split(",");

const trimCarName = (carArr) => carArr.map((el) => el.trim());

export default function validateCarName() {
  let carArr = splitCarName();
  carArr = trimCarName(carArr);
}
