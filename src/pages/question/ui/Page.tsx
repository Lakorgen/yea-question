import { Link, useParams } from "react-router";
import styles from "./styles.module.css";
import { useGetQuestionByIdQuery } from "@/entities/question/api/questionApi";
import ArrowLeftSvg from "@/shared/assets/ArrowLeftSvg";

const Page = () => {
  const { id } = useParams();
  const { data, isLoading, isError } = useGetQuestionByIdQuery(id || 1);
  console.log(data);

  if (isLoading) return <div>Loading...</div>;
  if (isError && !data) return <div>Error...</div>;

  return (
    <div className={styles.main__inner}>
      <Link to="/" className={styles.back}>
        <ArrowLeftSvg />
        Назад
      </Link>
      <div className={styles.wrapper}>
        <div className={styles.answer}>
          <div className={styles.head}>
            <h2 className={styles.title}>{data?.title}</h2>
            <p>{data?.description}</p>
          </div>
          <div className={styles.short__answer}>
            <h3>Короткий ответ</h3>
            <p
              dangerouslySetInnerHTML={{ __html: data?.shortAnswer || "" }}
            ></p>
          </div>
          <div className={styles.long__answer}>
            <h3>Развёрнутый ответ</h3>
            <p dangerouslySetInnerHTML={{ __html: data?.longAnswer || "" }}></p>
          </div>
        </div>
        <div className={styles.info}>
          <div className={styles.lvl}>
            <div className={styles.lvl__item}>
              <p>Рейтинг</p>
              <span>{data?.rate}</span>
            </div>
            <div className={styles.lvl__item}>
              <p>Сложность</p>
              <span>{data?.complexity}</span>
            </div>
          </div>
          <div className={styles.skills}>
            <p>Навыки</p>
            <span>{data?.questionSkills.map((item) => item.title)}</span>
          </div>
          <div className={styles.words}>
            <p>Ключевые слова</p>
            <div>
              {data?.keywords.map((item) => (
                <p>#{item}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
