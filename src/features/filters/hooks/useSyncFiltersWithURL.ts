import { useEffect } from "react";
import { useSearchParams } from "react-router";
import { useAppDispatch, useAppSelector } from "@/app/appStore";
import {
  setKeywords,
  setSpecialization,
  setSkills,
  setComplexity,
  setRating,
} from "@/entities/filters/api/filtersSlice";

export const useSyncFiltersWithURL = () => {
  const dispatch = useAppDispatch();
  const { keywords, specialization, skills, complexity, rate } = useAppSelector(
    (state) => state.filters
  );
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const urlKeywords = searchParams.get("keywords") || "";
    const urlSpecialization = searchParams.get("specialization") || "";
    const urlSkills = searchParams.get("skills") || "";
    const urlComplexity = searchParams.get("complexity") || "";
    const urlRating = searchParams.get("rating") || "";

    if (urlKeywords !== keywords) {
      dispatch(setKeywords(urlKeywords));
    }
    if (urlSpecialization !== specialization) {
      dispatch(setSpecialization(urlSpecialization));
    }
    if (urlSkills) {
      dispatch(setSkills(urlSkills.split(",")));
    }
    if (urlComplexity) {
      dispatch(setComplexity(urlComplexity));
    }
    if (urlRating) {
      dispatch(setRating(urlRating.split(",")));
    }
  }, [searchParams]);

  useEffect(() => {
    const params = new URLSearchParams();
    if (keywords) params.set("keywords", keywords);
    if (specialization) params.set("specialization", specialization);
    if (skills.length > 0) params.set("skills", skills.join(","));
    if (complexity) params.set("complexity", complexity.toString());
    if (rate) params.set("rating", rate.join(","));
    if (params.toString() !== searchParams.toString()) {
      setSearchParams(params);
    }
  }, [keywords, specialization, skills, complexity, rate, setSearchParams]);
};
