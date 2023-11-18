import LoginPage from "../../../support/page-objects/geniricPages/login-page";
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import CandidatePage from "../../../support/page-objects/candidatePages/candidate-page";
import CandidateHelper from "../../../support/helpers/candidate-interview-helper";
const loginPageObj: LoginPage = new LoginPage();
const candidatePageObj: CandidatePage = new CandidatePage();

Given("the admin is on the system", () => {
  cy.visit("/").as("LoginPage");
  cy.fixture("login-data").as("login-data");
  cy.get("@login-data").then((data: any) => {
    loginPageObj.userLogin(data.username, data.password);
  });
});

When("the admin start to type your And step here created new employee, job title and vacancy", () => {
  CandidateHelper.createCandidates();
});

When("the admin clicked into recruitment tab", () => {
  candidatePageObj.clickIntoRecruitmentLink();
});

When("the admin clicked into candidate tab", () => {
  candidatePageObj.clickIntoCandidatesLink();
});

When("the admin searched for specific candidate", () => {
  candidatePageObj.searchOnCandidate();
});

When("the admin clicked into passed button", () => {
  candidatePageObj.makeInterviewPassed();
});

When("the admin clicked into failed button", () => {
  candidatePageObj.makeInterviewFaild();
});

Then("the status will be passed", () => {
  candidatePageObj.validateInterviewStatusPassed();
});

Then("the status will be failed", () => {
  candidatePageObj.validateInterviewStatusFailed();
});
