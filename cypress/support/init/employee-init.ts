import GenerateRandomNumberClass from "../generic-functions/generate-random-numbers";
import { CreateEmployeePayload } from "../interfaces/payload/CreateEmployeePayloadInterface";
import { EmployeeJobDetailsPayload } from "../interfaces/payload/EmployeeJobDetailsPayloadInterface";

export default class EmployeeInitClass {
  static initNewEmployee(): CreateEmployeePayload {
    return {
      empPicture: null,
      employeeId: `${GenerateRandomNumberClass.generateRandomNumber()}`,
      firstName: `Luna_${GenerateRandomNumberClass.generateRandomNumber()}`,
      lastName: `L${GenerateRandomNumberClass.generateRandomNumber()}`,
      middleName: "",
    };
  }

  static initEmployeeJobDetails(jobTitleID: number, locationID: number): EmployeeJobDetailsPayload {
    return {
      jobTitleId: jobTitleID,
      joinedDate: null,
      locationId: locationID,
    };
  }
}
