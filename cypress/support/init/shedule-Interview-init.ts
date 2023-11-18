import { sheduleInterviewPayload } from "../interfaces/payload/SheduleInterviewPayload";
import GenerateRandomNumberClass from "../generic-functions/generate-random-numbers";

export default class sheduleInterviewInitClass {
  static initsheduleInterview(): sheduleInterviewPayload {
    return {
      interviewDate: "2023-11-27",
      interviewName: `Interview_${GenerateRandomNumberClass.generateRandomNumber()}`,
      interviewTime: "04:00",
      interviewerEmpNumbers: [2],
      note: null,
    };
  }
}
