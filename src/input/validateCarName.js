import { $carName, $carNameSubmit } from "../common/constants.js";

const splitCarName = () => {
  $carNameSubmit.addEventListener("click", () => {
    console.log($carName.value.split(","));
    return $carName.value.split(",");
  });
};

export { splitCarName };
