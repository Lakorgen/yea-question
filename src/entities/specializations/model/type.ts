import { ISpecialization } from "@/shared/interfaces";


export interface ISpecializationResponse {
  data: ISpecialization[];
  total: number;
  page: number;
  limit: number;
}

export interface ParamsType {
  page?: number;
  limit?: number;
}
