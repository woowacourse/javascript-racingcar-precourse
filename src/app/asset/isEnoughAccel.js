import { CAR_ACCEL_RULE } from './constant.js';

const { min, max, enough } = CAR_ACCEL_RULE;

const generateAccel = () => MissionUtils.Random.pickNumberInRange(min, max);

const isEnoughAccel = () => generateAccel() >= enough;

export default isEnoughAccel;
