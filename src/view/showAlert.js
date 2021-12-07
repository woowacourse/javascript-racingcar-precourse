import { ALERT_MESSAGE } from "../common/const.js";

export default function showAlert(STATE) {
  alert(`${ALERT_MESSAGE.DEFAULT} ${ALERT_MESSAGE[STATE]}`);

  return false;
}
