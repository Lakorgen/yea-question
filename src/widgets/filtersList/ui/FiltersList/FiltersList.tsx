import Search from "@/shared/ui/Search/Search";
import styles from "./styles.module.css";
import SearchSvg from "@/shared/assets/SearchSvg";
import TagList from "@/shared/ui/TagList/TagList";
import { useGetSpecializationsQuery } from "@/entities/specializations/api/specializationsApi";
import { ISpecialization } from "@/shared/interfaces";
import { useGetSkillsQuery } from "@/entities/skills/api/skillsApi";

const FiltersList = () => {
  const { data, isLoading, isError } = useGetSpecializationsQuery({ page: 1 });
  const {
    data: skills,
    isLoading: skillsIsLoading,
    isError: skillsIsError,
  } = useGetSkillsQuery({ page: 1, specializiationsId: 40 });

  if (isLoading || skillsIsLoading) return <div>Loading...</div>;
  if (isError || skillsIsError) return <div>Error...</div>;

  const specializations =
    data?.data.map((spec: ISpecialization) => ({
      id: spec.id,
      title: spec.title,
    })) || [];

  const skillsList =
    skills?.data.map((skill) => ({
      id: skill.id,
      title: skill.title,
    })) || [];

  return (
    <div className={styles.list}>
      <Search>
        <SearchSvg />
      </Search>
      <TagList title="Специализация" items={specializations} />
      <TagList title="Навыки" items={skillsList} />
      <TagList
        title="Уровень сложности"
        items={[
          { id: 1, title: "1-3" },
          { id: 2, title: "4-6" },
          { id: 3, title: "7-8" },
          { id: 4, title: "9-10" },
        ]}
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
      />
    </div>
  );
};

export default FiltersList;
