import { QuestionItem } from "@/entities/question";
import { useGetQuestionQuery } from "@/entities/question/api/questionApi";
import styles from "./styles.module.css";

const QuestionList = () => {
  const { data, isLoading, isError } = useGetQuestionQuery({ page: 2 });

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error...</div>;

  return (
    <div className={styles.questionWrapper}>
      <h2 className={styles.title}>Вопросы</h2>
      <ul className={styles.list}>
        {data?.data.map((item) => (
          <QuestionItem key={item.id} question={item} />
        ))}
      </ul>
    </div>
  );
};

export default QuestionList;
