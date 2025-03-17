import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ISpecializationResponse, ParamsType } from "../model/type";


const BASE_URL = import.meta.env.VITE_YEAHUB_BASE_URL;

export const specializationsApi = createApi({
  reducerPath: "specializationsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  endpoints: (builder) => ({
    getSpecializations: builder.query<ISpecializationResponse, ParamsType>({
      query: (params) => {
        const { page = 1, limit = 50 } = params || {};
        return {
          url: "specializations",
          params: { page, limit },
        };
      },
    }),
  }),
});

export const { useGetSpecializationsQuery } = specializationsApi;
