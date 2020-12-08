export default class RacingCarGame {
  #raceCourseProcess = {};

  constructor() {
    this.raceCourse = [];
    this.raceCourseProcessRecords = [];
  }

  static getProgressMark(progress) {
    let progressMark = '';
    for (let i = 0; i < progress; i += 1) {
      progressMark += '-';
    }

    return progressMark;
  }

  #getLastProcessRecord() {
    const lastRecordIndex = this.raceCourseProcessRecords.length - 1;
    const lastRecord = this.raceCourseProcessRecords[lastRecordIndex];

    return lastRecord;
  }

  #addProgressMarkToRaceCourse() {
    this.raceCourse.forEach((car) => {
      car.tryAdvance();
      this.#raceCourseProcess[car.name] = RacingCarGame.getProgressMark(
        car.progress
      );
    });
  }

  #recordRaceCourseProcess() {
    const raceCourseProcessAtMoment = { ...this.#raceCourseProcess };
    this.raceCourseProcessRecords.push(raceCourseProcessAtMoment);
  }

  addCarToRaceCourse(car) {
    this.raceCourse.push(car);
  }

  getWinnerCarNameList() {
    let winnerCarNameList = [];
    let maxProgressLength = -1;
    const lastRecord = this.#getLastProcessRecord();
    Object.keys(lastRecord).forEach((carName) => {
      if (maxProgressLength < lastRecord[carName].length) {
        winnerCarNameList = [];
        maxProgressLength = lastRecord[carName].length;
      }
      if (maxProgressLength === lastRecord[carName].length) {
        winnerCarNameList.push(carName);
      }
    });

    return winnerCarNameList;
  }

  play(tryCount) {
    for (let i = 0; i < tryCount; i += 1) {
      this.#addProgressMarkToRaceCourse();
      this.#recordRaceCourseProcess();
    }
  }
}
