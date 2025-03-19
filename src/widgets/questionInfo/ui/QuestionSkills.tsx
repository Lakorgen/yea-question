import { IQuestion } from "@/entities/question/model/types";
import styles from "./styles.module.css";

export const QuestionSkills = ({ questionSkills }: Partial<IQuestion>) => (
  <div className={styles.skills}>
    <p>Навыки</p>
    <span>{questionSkills?.map((item) => item.title).join(", ")}</span>
  </div>
);
