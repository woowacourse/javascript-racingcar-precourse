export default class RacingCarGame {
  constructor() {
    this.raceCourse = [];
    this.raceCourseProcess = {};
    this.raceCourseProcessRecords = [];
  }

  static getProgressMark(progress) {
    let progressMark = '';
    for (let i = 0; i < progress; i += 1) {
      progressMark += '-';
    }

    return progressMark;
  }

  addCarToRaceCourse(car) {
    this.raceCourse.push(car);
  }

  addProgressMarkToRaceCourse() {
    this.raceCourse.forEach((car) => {
      car.tryAdvance();
      this.raceCourseProcess[car.name] = RacingCarGame.getProgressMark(
        car.progress
      );
    });
  }

  recordRaceCourseProcess() {
    const raceCourseProcessAtMoment = { ...this.raceCourseProcess };
    this.raceCourseProcessRecords.push(raceCourseProcessAtMoment);
  }

  play(tryCount) {
    for (let i = 0; i < tryCount; i += 1) {
      this.addProgressMarkToRaceCourse();
      this.recordRaceCourseProcess();
    }
  }
}
