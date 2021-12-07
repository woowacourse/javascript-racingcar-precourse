export default function Car(name) {
  this.name = name;
  this.forwardCount = 0;
  this.race = () => {
    const randomNumber = MissionUtils.Random.pickNumberInRange(1, 9);
    this.forwardCount += randomNumber >= 4;
  };
}
