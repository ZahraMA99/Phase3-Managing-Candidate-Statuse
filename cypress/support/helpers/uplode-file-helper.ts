import GenerateVacancyHelper from "./Generate-vacancy-helper";
import GenerateJobTitleHelper from "./generate-job-title-helper";
import CreateNewEmployeeHelper from "./create-new-employee-helper";
import AddNewCandidateHelper from "./add-new-candidate-helper";
import { CANDIDATE_ID } from "./add-new-candidate-helper";
import { SHEDULED_INTERVIEW_ID } from "./add-new-candidate-helper";

export default class UploadeFileHelper {
  // application Initiated
  static createCandidatesWithApplicationInitiatedStatus() {
    CreateNewEmployeeHelper.addNewEmployeeViaAPI().then(() => {
      GenerateJobTitleHelper.addJobTitlesViaAPI().then(() => {
        GenerateVacancyHelper.addVacancyViaAPI().then(() => {
          AddNewCandidateHelper.addCandidateViaAPI();
        });
      });
    });
  }

  // application Hired
  static createCandidatesWithHierdStatus() {
    CreateNewEmployeeHelper.addNewEmployeeViaAPI().then(() => {
      GenerateJobTitleHelper.addJobTitlesViaAPI().then(() => {
        GenerateVacancyHelper.addVacancyViaAPI().then(() => {
          AddNewCandidateHelper.addCandidateViaAPI().then(() => {
            AddNewCandidateHelper.shortlisInterviewViaAPI(CANDIDATE_ID).then(() => {});
            AddNewCandidateHelper.sheduleInterviewViaAPI(CANDIDATE_ID).then(() => {
              AddNewCandidateHelper.makeInterviewPassedViaAPI(CANDIDATE_ID, SHEDULED_INTERVIEW_ID).then(() => {});
              AddNewCandidateHelper.makeCandidateOfferedViaAPI(CANDIDATE_ID).then(() => {});
              AddNewCandidateHelper.makeCandidateHiredViaAPI(CANDIDATE_ID);
            });
          });
        });
      });
    });
  }
}