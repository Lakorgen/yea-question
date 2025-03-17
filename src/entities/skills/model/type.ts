import { ISpecialization } from "@/shared/interfaces";

export interface ISkill {
  id: number;
  title: string;
  description: string;
  imageSrc: string;
  createdAt: string;
  updatedAt: string;
  specializations: ISpecialization[];
}

export interface ISkillsResponse {
  data: ISkill[];
  page: number;
  limit: number;
  total: number;
}

export interface ParamsType {
  page?: number;
  limit?: number;
  specializiationsId: number;
}
