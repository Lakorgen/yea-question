import { QuestionItem } from "@/entities/question";
import styles from "./styles.module.css";
import Pagination from "@/shared/ui/Pagination/Pagination";
import { IQuestion, IQuestionResponse } from "@/entities/question/model/types";
import Button from "@/shared/ui/Button/Button";

interface Props {
  data: IQuestionResponse;
  questions: IQuestion[];
  handlePageClick: (page: number) => void;
  handlePrevPage: () => void;
  handleNextPage: () => void;
  isLoading: boolean;
  isError: boolean;
}

const QuestionList = ({
  data,
  questions,
  handlePageClick,
  handlePrevPage,
  handleNextPage,
  isLoading,
  isError,
}: Props) => {
  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error...</div>;

  return (
    <div className={styles.questionWrapper}>
      <h2 className={styles.title}>Вопросы</h2>
      {questions.length > 0 ? (
        <>
          <ul className={styles.list}>
            {questions.map((item) => (
              <QuestionItem key={item.id} question={item} />
            ))}
          </ul>
          <Pagination
            totalPages={Math.ceil(data?.total / 10)}
            currentPage={data?.page}
            handleNextPage={handleNextPage}
            handlePrevPage={handlePrevPage}
            handlePageClick={handlePageClick}
          />
        </>
      ) : (
        <div>
          По данным фильтрам вопросов нет
          <Button
            onClick={() => (window.location.href = window.location.pathname)}
          >
            Сбросить
          </Button>
        </div>
      )}
    </div>
  );
};

export default QuestionList;
