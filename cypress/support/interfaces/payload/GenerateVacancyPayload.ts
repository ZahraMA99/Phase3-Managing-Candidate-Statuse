export interface GenerateVacancyPayload {
  description: string;
  employeeId: number;
  isPublished: boolean;
  jobTitleId: number;
  name: string;
  numOfPositions: number;
  status: boolean;
}
