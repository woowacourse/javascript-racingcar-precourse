import { $carName, NAME_MAX_LENGTH } from "../common/constants.js";

const splitCarName = () => $carName.value.split(",");

const trimCarName = (carArr) => carArr.map((el) => el.trim());

const isCarNameLength = (carArr) => {
  let valid = true;
  carArr.map((el) => {
    if (el.length > NAME_MAX_LENGTH) {
      valid = false;
      return false;
    }
  });

  return valid;
};

export default function validateCarName() {
  const carArr = trimCarName(splitCarName());
  console.log(isCarNameLength(carArr));
}
