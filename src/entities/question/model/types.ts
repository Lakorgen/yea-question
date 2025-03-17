export interface IUser {
  userId: string;
  firstName: string;
  lastName: string;
}

export interface IQuestionSpecialization {
  id: number;
  title: string;
  description: string;
  imageSrc: string;
  createdAt: string;
  updatedAt: string;
}

export interface IQuestionSkill {
  id: number;
  title: string;
  description: string;
  imageSrc: string;
  createdAt: string;
  updatedAt: string;
}

export interface IQuestion {
  id: number;
  title: string;
  description: string;
  code: string;
  imageSrc: string;
  keywords: string[];
  longAnswer: string;
  shortAnswer: string;
  status: string;
  complexity: number;
  rate: number;
  createdBy: IUser;
  updatedBy: IUser;
  questionSpecializations: IQuestionSpecialization[];
  questionSkills: IQuestionSkill[];
  createdAt: string;
  updatedAt: string;
}

export interface IQuestionResponse {
  data: IQuestion[];
  total: number;
  page: number;
  limit: number;
}

export interface ParamsType {
  page?: number;
  keywords?: string;
}
