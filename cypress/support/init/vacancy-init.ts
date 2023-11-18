import { GenerateVacancyPayload } from "../interfaces/payload/GenerateVacancyPayload";
import GenerateRandomNumberClass from "../generic-functions/generate-random-numbers";
import { EMPLOYEE_NUMBER } from "../helpers/create-new-employee-helper";
import { JOB_TITLE_ID } from "../helpers/generate-job-title-helper";

let NUM_OF_POSISTIONS: number = 7;

export default class VacancyInitClass {
  static initVacancy(): GenerateVacancyPayload {
    return {
      description: "vacancy description",
      employeeId: parseInt(`${EMPLOYEE_NUMBER}`, 10),
      isPublished: true,
      jobTitleId: JOB_TITLE_ID,
      name: `Vacancy_${GenerateRandomNumberClass.generateRandomNumber()}`,
      numOfPositions: NUM_OF_POSISTIONS,
      status: true,
    };
  }
}
