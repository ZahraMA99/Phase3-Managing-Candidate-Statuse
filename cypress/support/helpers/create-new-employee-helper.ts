import EmployeeInitClass from "../init/employee-init";
import LoginDetailsInitClass from "../init/login-details-init";

const baseUrl = Cypress.config("baseUrl");

export let EMPLOYEE_NUMBER: string;
export let EMPLOYEE_ID: number;
export let EMPLOYEE_NAME: string;
export let EMPLOYEE_USERNAME: string;
export let EMPLOYEE_PASSWORD: string;
export let EMPLOYEE_FIRSTNAME: string;
export let EMPLOYEE_LASTNAME: string;


export const URLs = {
  newEmployeeURL: `${baseUrl}/web/index.php/api/v2/pim/employees`,
  newEmployeeJobDetailsURL: `${baseUrl}/web/index.php/api/v2/pim/employees`,
  loginDetails: `${baseUrl}/web/index.php/api/v2/admin/users`,
};

export default class CreateNewEmployeeHelper {
  static addNewEmployeeViaAPI() {
    return new Cypress.Promise((resolve, reject) => {
      cy.addNewEmployee(
        "POST",
        URLs.newEmployeeURL,
        EmployeeInitClass.initNewEmployee()
      ).then((response) => {
        EMPLOYEE_ID = response.data.employeeId;
        EMPLOYEE_NAME = (`${response.data.firstName} ${response.data.lastName}`);  
        EMPLOYEE_FIRSTNAME = response.data.firstName;
        EMPLOYEE_LASTNAME = response.data.lastName;
        EMPLOYEE_NUMBER = response.data.empNumber;
        resolve(EMPLOYEE_ID);
        resolve(EMPLOYEE_NUMBER);
        resolve(EMPLOYEE_NAME);
        resolve(EMPLOYEE_FIRSTNAME);
        resolve(EMPLOYEE_LASTNAME);
        cy.log("---- SUCCESSFULL: ADMIN ADD NEW EMPLOYEE ----");
      });
    });
  }

  static modifyJobDetails(
    empNum: string,
    jobTitleID: number,
    locationID: number
  ) {
    cy.request({
      method: "PUT",
      url: `${URLs.newEmployeeJobDetailsURL}/${empNum}/job-details`,
      body: EmployeeInitClass.initEmployeeJobDetails(jobTitleID, locationID),
    }).then(() => {
      cy.log("---- SUCCESSFULL: UPDATE EMPLOYEE JOB DETAILS ----");
    });
  }


  static createLoginDetailsViaAPI() {
    return new Cypress.Promise((resolve, reject) => {
      cy.request({
        method: "POST",
        url: `${URLs.loginDetails}`,
        body: LoginDetailsInitClass.initLoginDetails(),
      }).then((response) => {
        EMPLOYEE_USERNAME = response.body.data.userName;
        EMPLOYEE_PASSWORD = LoginDetailsInitClass.initLoginDetails().password;
        resolve(EMPLOYEE_USERNAME);
        cy.log("---- SUCCESSFULL: CREATE EMPLOYEE LOGIN DETAILS ----");
      });
    });
  }

  static deleteEmployee() {
    cy.request({
      method: "DELETE",
      url: `${URLs.newEmployeeURL}`,
      body: {
        ids: [EMPLOYEE_ID],
      },
    }).then(() => {
      cy.log("----- SUCCESSFULL: DELETE EMPLOYEE ------");
    });
  }
}
