import { QuestionItem } from "@/entities/question";
import { useGetQuestionQuery } from "@/entities/question/api/questionApi";
import styles from "./styles.module.css";
// import Pagination from "@/shared/ui/Pagination/Pagination";

const QuestionList = () => {
  const { data, isLoading, isError } = useGetQuestionQuery({ page: 2 });



  if (isLoading) return <div>Loading...</div>;
  if (isError && !data) return <div>Error...</div>;
  console.log(data?.page);

  return (
    <div className={styles.questionWrapper}>
      <h2 className={styles.title}>Вопросы</h2>
      <ul className={styles.list}>
        {data?.data.map((item) => (
          <QuestionItem key={item.id} question={item} />
        ))}
      </ul>
      {/* <Pagination totalPages={data?.total} currentPage={data?.page} handleNextPage={handleNextPage} handlePrevPage={handlePrevPage} 
      handlePageClick={handlePageClick} /> */}
    </div>
  );
};

export default QuestionList;
