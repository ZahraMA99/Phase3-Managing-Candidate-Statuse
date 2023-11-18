import AddCndidateInitClass from "../init/add-new-candidate-init";
import sheduleInterviewInitClass from "../init/shedule-Interview-init";
import GenerateRandomNumberClass from "../generic-functions/generate-random-numbers";

const baseUrl = Cypress.config("baseUrl");
export let CANDIDATE_ID: string;
export let CANDIDATE_ID_SHORTLISTED: string;
export let SHEDULED_INTERVIEW_ID: string;

export const URLs = {
  candidateURL: `${baseUrl}/web/index.php/api/v2/recruitment/candidates`,
};

export default class AddNewCandidateHelper {
  static addCandidateViaAPI() {
    return new Cypress.Promise((resolve, reject) => {
      cy.request({
        method: "POST",
        url: `${URLs.candidateURL}`,
        body: AddCndidateInitClass.addCandidateInit(),
      }).then((response) => {
        CANDIDATE_ID = response.body.data.id;
        resolve(CANDIDATE_ID);
        cy.log("----- SUCCESSFULL: ADMIN ADD NEW CANDIDATE -----");
      });
    });
  }

  // shorlisted
  static shortlisInterviewViaAPI(candidateId: string) {
    return new Cypress.Promise((resolve,reject) => {
      cy.request({
        method: "PUT",
        url: `${URLs.candidateURL}/${candidateId}/shortlist`,
        body: { note: null },
      }).then(() => {
        cy.log("---- SUCCESSFULL: MAKE INTERVIEW SHORTLISTED ----");
      });
    });
  }

  // shedule-interview
  static sheduleInterviewViaAPI(candidateId: string) {
    return new Cypress.Promise((resolve,reject) => {
      cy.request({
        method: "POST",
        url: `${URLs.candidateURL}/${candidateId}/shedule-interview`,
        body: sheduleInterviewInitClass.initsheduleInterview(),
      }).then((response) => {
        SHEDULED_INTERVIEW_ID = response.body.data.id;
        resolve(SHEDULED_INTERVIEW_ID);
        cy.log("---- SUCCESSFULL: SHEDULED INTERVIEW ----");
      });
    });
  }

  // passed
  static makeInterviewPassedViaAPI(candidateId: string, sheduledId: string) {
    return new Cypress.Promise(() => {
      cy.request({
        method: "PUT",
        url: `${URLs.candidateURL}/${candidateId}/interviews/${sheduledId}/pass`,
        body: {
          note: null,
        },
      }).then(() => {
        cy.log("---- SUCCESSFULL: MAKE INTERVIEW PASSED ----");
      });
    });
  }

  // Offerd
  static makeCandidateOfferedViaAPI(candidateId: string) {
    return new Cypress.Promise(() => {
      cy.request({
        method: "PUT",
        url: `${URLs.candidateURL}/${candidateId}/job/offer`,
        body: {
          note: null,
        },
      }).then(() => {
        cy.log("---- SUCCESSFULL: CANDIDATE OFFERED ----");
      });
    });
  }

  // Hired
  static makeCandidateHiredViaAPI(candidateId: string) {
    return new Cypress.Promise(() => {
      cy.request({
        method: "PUT",
        url: `${URLs.candidateURL}/${candidateId}/hire`,
        body: {
          note: null,
        },
      }).then(() => {
        cy.log("---- SUCCESSFULL: CANDIDATE HIRED ----");
      });
    });
  }
}

