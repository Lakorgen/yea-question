import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IQuestion, IQuestionResponse, ParamsType } from "../model/types";

const BASE_URL = import.meta.env.VITE_YEAHUB_BASE_URL;

export const questionApi = createApi({
  reducerPath: "questionApi",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  endpoints: (builder) => ({
    getQuestion: builder.query<IQuestionResponse, ParamsType>({
      query: (params) => {
        const {
          page = 1,
          keywords,
          specialization,
          skills,
          complexity,
          rate,
        } = params || {};
        return {
          url: "questions/public-questions",
          params: { page, keywords, specialization, skills, complexity, rate },
        };
      },
    }),
    getQuestionById: builder.query<IQuestion, number | string>({
      query: (id) => {
        return {
          url: `/questions/public-questions/${id}`,
        };
      },
    }),
  }),
});

export const { useGetQuestionQuery, useGetQuestionByIdQuery } = questionApi;
