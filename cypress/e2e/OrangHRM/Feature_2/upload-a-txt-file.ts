import LoginPage from "../../../support/page-objects/geniricPages/login-page";
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { Before, After } from "@badeball/cypress-cucumber-preprocessor";
import CandidatePage from "../../../support/page-objects/candidatePages/candidate-page";
import UploadeFileHelper from "../../../support/helpers/uplode-file-helper";

const loginPageObj: LoginPage = new LoginPage();
const candidatePageObj: CandidatePage = new CandidatePage();

Given("the admin on the system", () => {
  cy.visit("/").as("LoginPage");
  cy.fixture("login-data").as("login-data");
  cy.get("@login-data").then((data: any) => {
    loginPageObj.userLogin(data.username, data.password);
  });
  UploadeFileHelper.createCandidatesWithHierdStatus();
});

When("the admin clicked into recruitment tab", () => {
  candidatePageObj.clickIntoRecruitmentLink();
});

When("the admin clicked into candidate tab", () => {
  candidatePageObj.clickIntoCandidatesLink();
});

When("the admin searched for specific candidate and clicked into eye icon ", () => {
  candidatePageObj.searchOnCandidate();
});

When("the admin clicked into passed buttons ", () => {
  candidatePageObj.makeInterviewPassed();
});

Then("the status will be passed", () => {
  candidatePageObj.validateInterviewStatusPassed();
});
