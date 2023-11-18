import VacancyInitClass from "../init/vacancy-init";
import { EMPLOYEE_ID } from "./create-new-employee-helper";
const baseUrl = Cypress.config("baseUrl");

export let VACANCY_ID: number;
export let VACANCY_NAME: any;

export const URLs = {
  vacancyURL: `${baseUrl}/web/index.php/api/v2/recruitment/vacancies`,
};

export default class GenerateVacancyHelper {
  static addVacancyViaAPI() {
    return new Cypress.Promise((resolve, reject) => {
      cy.request({
        method: "POST",
        url: `${URLs.vacancyURL}`,
        body: VacancyInitClass.initVacancy(),
      }).then((response) => {
        VACANCY_ID = response.body.data.id;
        VACANCY_NAME = response.body.data.name;
        resolve(VACANCY_ID);
        resolve(VACANCY_NAME);
        cy.log("----- SUCCESSFULL: ADMIN ADD VACANCY -----");
      });
    });
  }
}
