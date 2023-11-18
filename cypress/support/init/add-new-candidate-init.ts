import GenerateRandomNumberClass from "../generic-functions/generate-random-numbers";
import { CreateCandidatePayload } from "../interfaces/payload/AddNewCandidatePayload";
import { VACANCY_ID } from "../helpers/Generate-vacancy-helper";

let randomNumber = GenerateRandomNumberClass.generateRandomNumber();
export default class AddCndidateInitClass {
  static addCandidateInit(): CreateCandidatePayload {
    return {
      comment: `Comment_${randomNumber}`,
      consentToKeepData: false,
      contactNumber: randomNumber,
      dateOfApplication: null,
      email: `email_${randomNumber}@gsg.com`,
      firstName: `lela_${randomNumber}`,
      keywords: `${randomNumber}`,
      lastName: `Ann_${randomNumber}`,
      middleName: null,
      vacancyId: VACANCY_ID ,
    };
  }
}
