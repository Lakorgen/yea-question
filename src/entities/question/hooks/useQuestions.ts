import { useAppSelector } from "@/app/appStore";
import { useGetQuestionQuery } from "../api/questionApi";

export const useQuestions = () => {
  const { page, keywords, specialization, skills, complexity, rate } =
    useAppSelector((state) => state.filters);

  const { data, isLoading, isError } = useGetQuestionQuery({
    page,
    keywords: keywords !== "" ? keywords : undefined,
    specialization: specialization !== "" ? specialization : undefined,
    skills: skills.join(",") ? skills.join(",") : undefined,
    complexity: complexity !== null ? complexity : undefined,
    rate: rate?.join(",") ? rate.join(",") : undefined,
  });

  return { data, isLoading, isError };
};
