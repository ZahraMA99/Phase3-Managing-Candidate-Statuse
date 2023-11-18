import GenerateRandomNumberClass from "../../generic-functions/generate-random-numbers";
import { VACANCY_NAME } from "../../helpers/Generate-vacancy-helper";

let randomNumber = GenerateRandomNumberClass.generateRandomNumber();

export default class CandidatePage {
  elements = {
    sidebar: () => cy.get(".oxd-sidepanel-body"),
    navbar: () => cy.get(".oxd-topbar-body-nav"),
    passBtn: () => cy.get(".oxd-button--success"),
    failBtn: () => cy.get(".oxd-button--danger"),
    tableBody: () => cy.get(".oxd-table-body"),
    tableCard: () => cy.get(".oxd-table-card"),
    saveBtn: () => cy.get(".oxd-button--secondary"),
    status: () => cy.get(".orangehrm-recruitment-status > .oxd-text")
  };

  clickIntoRecruitmentLink() {
    this.elements.sidebar().contains("Recruitment").click();
  }

  clickIntoCandidatesLink() {
    this.elements.navbar().contains("Candidates").click();
  }

  makeInterviewPassed() {
    this.elements.passBtn().contains("Mark Interview Passed").click({ force: true });
    cy.wait(6000)
    this.elements.saveBtn().contains("Save").click({force:true});
  }

  makeInterviewFaild() {
    this.elements.failBtn().contains("Mark Interview Failed").click({ force: true });
    cy.wait(5000)
    this.elements.saveBtn().contains("Save").click({force:true});
  }

  searchOnCandidate(){
    this.elements.tableBody().contains(".oxd-table-card", VACANCY_NAME).find(".bi-eye-fill").click({force:true});
  }

  validateInterviewStatusPassed(){
    cy.wait(5000)
    this.elements.status().should("have.text", "Status: Interview Passed");
  }

  validateInterviewStatusFailed(){
    cy.wait(5000);
    this.elements.status().should("have.text", "Status: Interview Failed");
  }
}
