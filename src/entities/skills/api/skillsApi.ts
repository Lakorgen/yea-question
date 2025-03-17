import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ISkillsResponse, ParamsType } from "../model/type";

const BASE_URL = import.meta.env.VITE_YEAHUB_BASE_URL;

export const skillsApi = createApi({
  reducerPath: "skillsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  endpoints: (builder) => ({
    getSkills: builder.query<ISkillsResponse, ParamsType>({
      query: (params) => {
        const { page = 1, limit = 50, specializiationsId = 1 } = params || {};
        return {
          url: "skills",
          params: { page, limit, specializiationsId },
        };
      },
    }),
  }),
});

export const { useGetSkillsQuery } = skillsApi;
