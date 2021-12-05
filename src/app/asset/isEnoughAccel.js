const generateAccel = () => MissionUtils.Random.pickNumberInRange(0, 9);

const isEnoughAccel = () => generateAccel() >= 4;

export default isEnoughAccel;
