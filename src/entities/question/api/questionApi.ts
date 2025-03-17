import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IQuestionResponse, ParamsType } from "../model/types";


const BASE_URL = import.meta.env.VITE_YEAHUB_BASE_URL;

export const questionApi = createApi({
  reducerPath: "questionApi",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  endpoints: (builder) => ({
    getQuestion: builder.query<IQuestionResponse, ParamsType>({
      query: (params) => {
        const { page = 1, keywords } = params || {};
        return {
          url: "questions/public-questions",
          params: { page, keywords },
        };
      },
    }),
  }),
});

export const { useGetQuestionQuery } = questionApi;
