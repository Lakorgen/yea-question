import { filtersReducer } from "@/entities/filters";
import { questionApi } from "@/entities/question/api/questionApi";
import { skillsApi } from "@/entities/skills/api/skillsApi";
import { specializationsApi } from "@/entities/specializations/api/specializationsApi";
import { combineReducers } from "@reduxjs/toolkit";

export const rootReducer = combineReducers({
  [questionApi.reducerPath]: questionApi.reducer,
  [specializationsApi.reducerPath]: specializationsApi.reducer,
  [skillsApi.reducerPath]: skillsApi.reducer,
  filters: filtersReducer,
});
