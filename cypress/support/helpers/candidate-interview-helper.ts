import GenerateVacancyHelper from "./Generate-vacancy-helper";
import GenerateJobTitleHelper from "./generate-job-title-helper";
import CreateNewEmployeeHelper from "./create-new-employee-helper";
import AddNewCandidateHelper from "./add-new-candidate-helper";
import { CANDIDATE_ID } from "./add-new-candidate-helper";

export default class CandidateHelper {
  static createCandidates() {
    CreateNewEmployeeHelper.addNewEmployeeViaAPI().then(() => {
      GenerateJobTitleHelper.addJobTitlesViaAPI().then(() => {
        GenerateVacancyHelper.addVacancyViaAPI().then(() => {
          AddNewCandidateHelper.addCandidateViaAPI().then(() => {
            AddNewCandidateHelper.shortlisInterviewViaAPI(CANDIDATE_ID).then(() => {});
            AddNewCandidateHelper.sheduleInterviewViaAPI(CANDIDATE_ID).then(() => {});
          });
        });
      });
    });
    cy.log("----- ALL PRE-REQUISETS DONE -----");
  }
}
