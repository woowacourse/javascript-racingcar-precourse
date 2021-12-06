import { MESSAGE } from "../constant/alertMessage.js";
import { RACING_COUNT } from "../constant/racing.js";

export default function checkValidracingCount(count) {
  const isValid = count > RACING_COUNT.MININUM;
  if (!isValid) {
    return alert(MESSAGE.INVALID_RACING_COUNT);
  }
  return isValid;
}
