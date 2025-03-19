import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FiltersState {
  page: number;
  keywords: string;
  specialization: string;
  skills: string[];
  complexity: string | null;
  rate: string[] | null;
}

const initialState: FiltersState = {
  page: 1,
  keywords: "",
  specialization: "",
  skills: [],
  complexity: null,
  rate: null,
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
    setKeywords: (state, action: PayloadAction<string>) => {
      state.keywords = action.payload;
      state.page = 1;
    },
    setSpecialization: (state, action: PayloadAction<string>) => {
      state.specialization = action.payload;
      state.page = 1;
    },
    setSkills: (state, action: PayloadAction<string[]>) => {
      state.skills = action.payload;
      state.page = 1;
    },
    setComplexity: (state, action: PayloadAction<string | null>) => {
      state.complexity = action.payload;
      state.page = 1;
    },
    setRating: (state, action: PayloadAction<string[] | null>) => {
      state.rate = action.payload;
      state.page = 1;
    },
  },
});

export const {
  setPage,
  setKeywords,
  setSpecialization,
  setSkills,
  setComplexity,
  setRating,
} = filtersSlice.actions;

export default filtersSlice.reducer;
