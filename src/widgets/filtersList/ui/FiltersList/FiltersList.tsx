import Search from "@/shared/ui/Search/Search";
import styles from "./styles.module.css";
import SearchSvg from "@/shared/assets/SearchSvg";
import TagList from "@/shared/ui/TagList/TagList";
import { useGetSpecializationsQuery } from "@/entities/specializations/api/specializationsApi";
import { ISpecialization } from "@/shared/interfaces";
import { useGetSkillsQuery } from "@/entities/skills/api/skillsApi";
import { useSearchParams } from "react-router";
import { useAppDispatch, useAppSelector } from "@/app/appStore";
import { useEffect } from "react";
import {
  setComplexity,
  setKeywords,
  setRating,
  setSkills,
  setSpecialization,
} from "@/entities/filters/api/filtersSlice";

const FiltersList = () => {
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

  const { data, isLoading, isError } = useGetSpecializationsQuery({ page: 1 });
  const {
    data: skillsArray,
    isLoading: skillsIsLoading,
    isError: skillsIsError,
  } = useGetSkillsQuery({ specializations: specialization || 11 });

  const handleSearch = (keywords: string) => {
    dispatch(setKeywords(keywords));
  };

  const handleFilterChange = (filterType: string, value: string) => {
    switch (filterType) {
      case "specialization":
        dispatch(setSpecialization(value));
        break;
      case "skills":
        dispatch(setSkills(value.split(",")));
        break;
      case "complexity":
        dispatch(setComplexity(value));
        break;
      case "rating":
        dispatch(setRating(value.split(",")));
        break;
      default:
        break;
    }
  };

  if (isLoading || skillsIsLoading) return <div>Loading...</div>;
  if (isError || skillsIsError) return <div>Error...</div>;

  const specializations =
    data?.data.map((spec: ISpecialization) => ({
      id: spec.id,
      title: spec.title,
    })) || [];

  const skillsList =
    skillsArray?.data.map((skill) => ({
      id: skill.id,
      title: skill.title,
    })) || [];

  return (
    <div className={styles.list}>
      <Search onSearch={handleSearch}>
        <SearchSvg />
      </Search>
      <TagList
        title="Специализация"
        items={specializations}
        onChange={(value) => handleFilterChange("specialization", value)}
      />
      <TagList
        title="Навыки"
        items={skillsList}
        onChange={(value) => handleFilterChange("skills", value)}
      />
      <TagList
        title="Уровень сложности"
        items={[
          { id: 1, title: "1-3" },
          { id: 2, title: "4-6" },
          { id: 3, title: "7-8" },
          { id: 4, title: "9-10" },
        ]}
        onChange={(value) => handleFilterChange("complexity", value)}
      />
      <TagList
        title="Рейтинг"
        items={[
          { id: 1, title: "1" },
          { id: 2, title: "2" },
          { id: 3, title: "3" },
          { id: 4, title: "4" },
          { id: 5, title: "5" },
        ]}
        onChange={(value) => handleFilterChange("rating", value)}
      />
    </div>
  );
};

export default FiltersList;
