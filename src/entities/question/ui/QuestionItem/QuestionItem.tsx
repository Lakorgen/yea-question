import Accordion from "@/shared/ui/Accordion/Accordion";
import { IQuestion } from "../../model/types";
import styles from "./styles.module.css";
import { Link } from "react-router";
import ArrowRightSvg from "@/shared/assets/ArrowRightSvg";

interface Props {
  question: IQuestion;
}

const QuestionItem = ({ question }: Props) => {
  return (
    <li className={styles.item}>
      <Accordion title={question.title}>
        <div className={styles.info}>
          <div className={styles.info__item}>
            Рейтинг: <span>{question.rate}</span>
          </div>
          <div className={styles.info__item}>
            Сложеность: <span>{question.complexity}</span>
          </div>
        </div>
        <div
          className={styles.answer}
          dangerouslySetInnerHTML={{ __html: question.shortAnswer }}
        />
        <Link to="/" className={styles.more}>
          Подробнее
          <ArrowRightSvg />
        </Link>
      </Accordion>
    </li>
  );
};

export default QuestionItem;
