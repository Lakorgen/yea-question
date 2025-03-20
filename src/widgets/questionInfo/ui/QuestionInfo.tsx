import { IQuestion } from "@/entities/question/model/types";
import styles from "./styles.module.css";
import { QuestionSkills } from "./QuestionSkills";
import { QuestionKeywords } from "./QuestionKeywords";
import { Card } from "@/shared/ui/Card/Card";

const QuestionInfo = ({
  rate,
  complexity,
  questionSkills,
  keywords,
}: Partial<IQuestion>) => {
  return (
    <Card className={styles.info}>
      <div className={styles.lvl}>
        <div className={styles.lvl__item}>
          <p>Рейтинг</p>
          <span>{rate}</span>
        </div>
        <div className={styles.lvl__item}>
          <p>Сложность</p>
          <span>{complexity}</span>
        </div>
      </div>
      <QuestionSkills questionSkills={questionSkills} />
      <QuestionKeywords keywords={keywords} />
    </Card>
  );
};

export default QuestionInfo;
