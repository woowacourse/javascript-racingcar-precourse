export default class Car {
  constructor(name) {
    this.name = name;
    this.race = '';
  }

  get carName() {
    return this.name;
  }

  get raceResult() {
    return this.race;
  }

  getTrialResult() {
    const trialNumber = this.getRandomNumber();
    const trialResult = trialNumber >= 4 ? '-' : '';
    this.race += trialResult;
  }

  getRandomNumber() {
    return Math.floor(Math.random() * 10);
  }

  resetRaceResult() {
    this.race = '';
  }
}
