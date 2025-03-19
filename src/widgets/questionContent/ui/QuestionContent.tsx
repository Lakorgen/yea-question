import { IQuestion } from "@/entities/question/model/types";
import styles from "./styles.module.css";

const QuestionContent = ({
  title,
  description,
  shortAnswer,
  longAnswer,
}: Partial<IQuestion>) => {
  return (
    <div className={styles.answer}>
      <div className={styles.head}>
        <h2 className={styles.title}>{title}</h2>
        <p>{description}</p>
      </div>
      <div className={styles.short__answer}>
        <h3>Короткий ответ</h3>
        <p dangerouslySetInnerHTML={{ __html: shortAnswer || "" }}></p>
      </div>
      <div className={styles.long__answer}>
        <h3>Развёрнутый ответ</h3>
        <p dangerouslySetInnerHTML={{ __html: longAnswer || "" }}></p>
      </div>
    </div>
  );
};

export default QuestionContent;
