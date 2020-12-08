const makeRaceCourseTemplate = (carName, progressMark) => {
  return `
    <div>${carName}: ${progressMark}</div>
  `;
};

const makeRaceCourseProcessTemplate = (raceCourseProcess) => {
  let raceCourseTemplates = '';
  Object.keys(raceCourseProcess).forEach((carName) => {
    raceCourseTemplates += makeRaceCourseTemplate(
      carName,
      raceCourseProcess[carName]
    );
  });

  return `
    <div>
      ${raceCourseTemplates}
    </div>
    <br />
  `;
};

export const makeRaceCourseProcessRecordsTemplate = (raceCourseRecords) => {
  let raceCourseProcesseTemplates = '';
  raceCourseRecords.forEach((raceCourseRecord) => {
    raceCourseProcesseTemplates += makeRaceCourseProcessTemplate(
      raceCourseRecord
    );
  });

  return `
    <div>
      ${raceCourseProcesseTemplates}
    </div>
  `;
};

export default {
  makeRaceCourseProcessRecordsTemplate,
};
