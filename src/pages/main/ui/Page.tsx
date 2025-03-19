import { QuestionList } from "@/widgets/questionList";
import styles from "./styles.module.css";
import { FiltersList } from "@/widgets/filtersList";
import { useAppDispatch, useAppSelector } from "@/app/appStore";
import { setPage } from "@/entities/filters/api/filtersSlice";
import { useQuestions } from "@/entities/question";


const Page = () => {
  const dispatch = useAppDispatch();
  const { data, isLoading, isError } = useQuestions();
  const { page } = useAppSelector((state) => state.filters);

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
