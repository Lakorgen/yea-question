import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./appReducer";
import { questionApi } from "@/entities/question/api/questionApi";
import { useDispatch, useSelector } from "react-redux";
import { specializationsApi } from "@/entities/specializations/api/specializationsApi";
import { skillsApi } from "@/entities/skills/api/skillsApi";

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      questionApi.middleware,
      specializationsApi.middleware,
      skillsApi.middleware
    ),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
