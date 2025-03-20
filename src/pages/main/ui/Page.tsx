import { QuestionList } from "@/widgets/questionList";
import styles from "./styles.module.css";
import { FiltersList } from "@/widgets/filtersList";
import { useAppDispatch, useAppSelector } from "@/app/appStore";
import { setPage } from "@/entities/filters/api/filtersSlice";
import { useQuestions } from "@/entities/question";
import { Card } from "@/shared/ui/Card/Card";
import Skeleton from "@/shared/ui/Skeleton/Skeleton";

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
  if (isLoading) {
    return (
      <div className={styles.main__inner}>
        <Card className={styles.card}>
          <Skeleton width="100%" height="40px" /> {/* Заголовок */}
          <Skeleton width="100%" height="600px" /> {/* Список вопросов */}
          <Skeleton width="100px" height="40px" /> {/* Кнопки */}
        </Card>
      </div>
    );
  }

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
