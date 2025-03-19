import { QuestionList } from "@/widgets/questionList";
import styles from "./styles.module.css";
import { FiltersList } from "@/widgets/filtersList";
import { useGetQuestionQuery } from "@/entities/question/api/questionApi";
import { useAppDispatch, useAppSelector } from "@/app/appStore";
import { setPage } from "@/entities/filters/api/filtersSlice";

const Page = () => {
  const dispatch = useAppDispatch();
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

  // const [searchParams, setSearchParams] = useSearchParams();
  // const page = parseInt(searchParams.get("page") || "1");
  // const keywords = searchParams.get("keywords") || "";

  const handlePageClick = (newPage: number) => {
    dispatch(setPage(newPage));
  };

  const handlePrevPage = () => {
    if (page > 1) {
      dispatch(setPage(page - 1));
    }
  };

  const handleNextPage = () => {
    if (data && page < data.total) {
      dispatch(setPage(page + 1));
    }
  };
  return (
    <div className={styles.main__inner}>
      {data?.data && (
        <QuestionList
          data={data}
          questions={data?.data}
          handlePageClick={handlePageClick}
          handlePrevPage={handlePrevPage}
          handleNextPage={handleNextPage}
          isLoading={isLoading}
          isError={isError}
        />
      )}
      <FiltersList />
    </div>
  );
};

export default Page;
