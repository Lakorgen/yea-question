import { QuestionList } from "@/widgets/questionList";
import styles from "./styles.module.css";
import { FiltersList } from "@/widgets/filtersList";

const Page = () => {
  return (
    <div className={styles.main__inner}>
      <QuestionList />
      <FiltersList />
    </div>
  );
};

export default Page;
