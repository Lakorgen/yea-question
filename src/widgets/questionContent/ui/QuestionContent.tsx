import { IQuestion } from "@/entities/question/model/types";
import styles from "./styles.module.css";
import { Card } from "@/shared/ui/Card/Card";

const QuestionContent = ({
  title,
  description,
  shortAnswer,
  longAnswer,
}: Partial<IQuestion>) => {
  return (
    <div className={styles.answer}>
      <Card className={styles.head}>
        <h3 className={styles.title}>{title}</h3>
        <p>{description}</p>
      </Card>
      <Card className={styles.short__answer}>
        <h3>Короткий ответ</h3>
        <p dangerouslySetInnerHTML={{ __html: shortAnswer || "" }}></p>
      </Card>
      <Card className={styles.long__answer}>
        <h3>Развёрнутый ответ</h3>
        <p dangerouslySetInnerHTML={{ __html: longAnswer || "" }}></p>
      </Card>
    </div>
  );
};

export default QuestionContent;
