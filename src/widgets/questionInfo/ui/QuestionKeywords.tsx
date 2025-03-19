import { IQuestion } from "@/entities/question/model/types";
import styles from "./styles.module.css";

export const QuestionKeywords = ({ keywords }: Partial<IQuestion>) => (
  <div className={styles.words}>
    <p>Ключевые слова</p>
    <div>
      {keywords?.map((item) => (
        <p key={item}>#{item}</p>
      ))}
    </div>
  </div>
);
