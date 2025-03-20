import Search from "@/shared/ui/Search/Search";
import styles from "./styles.module.css";
import SearchSvg from "@/shared/assets/SearchSvg";
import TagList from "@/shared/ui/TagList/TagList";
import { useGetSpecializationsQuery } from "@/entities/specializations/api/specializationsApi";
import { ISpecialization } from "@/shared/interfaces";
import { useGetSkillsQuery } from "@/entities/skills/api/skillsApi";
import { useAppDispatch, useAppSelector } from "@/app/appStore";
import {
  setComplexity,
  setKeywords,
  setRating,
  setSkills,
  setSpecialization,
} from "@/entities/filters/api/filtersSlice";
import { useSyncFiltersWithURL } from "@/features/filters";
import { Card } from "@/shared/ui/Card/Card";
import Skeleton from "@/shared/ui/Skeleton/Skeleton";

const FiltersList = () => {
  const dispatch = useAppDispatch();
  const specialization = useAppSelector(
    (state) => state.filters.specialization
  );

  useSyncFiltersWithURL();

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

  if (isLoading || skillsIsLoading) {
    return (
      <Card className={styles.list}>
        <Skeleton width="100%" height="40px" /> {/* Поле поиска */}
        <Skeleton width="100%" height="60px" /> {/* Список фильтров */}
        <Skeleton width="100%" height="60px" />
        <Skeleton width="100%" height="60px" />
      </Card>
    );
  }
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
    <Card className={styles.list}>
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
    </Card>
  );
};

export default FiltersList;
