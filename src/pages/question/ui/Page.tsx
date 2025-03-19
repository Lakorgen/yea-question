import { Link, useParams } from "react-router";
import styles from "./styles.module.css";
import { useGetQuestionByIdQuery } from "@/entities/question/api/questionApi";
import ArrowLeftSvg from "@/shared/assets/ArrowLeftSvg";
import { QuestionContent } from "@/widgets/questionContent";
import { QuestionInfo } from "@/widgets/questionInfo";

const Page = () => {
  const { id } = useParams();
  const { data, isLoading, isError } = useGetQuestionByIdQuery(id || 1);

  if (isLoading) return <div>Loading...</div>;
  if (isError && !data) return <div>Error...</div>;

  return (
    <div className={styles.main__inner}>
      <Link to="/" className={styles.back}>
        <ArrowLeftSvg />
        Назад
      </Link>
      <div className={styles.wrapper}>
        <QuestionContent
          title={data?.title}
          description={data?.description}
          shortAnswer={data?.shortAnswer}
          longAnswer={data?.longAnswer}
        />
        <QuestionInfo
          rate={data?.rate}
          complexity={data?.complexity}
          questionSkills={data?.questionSkills}
          keywords={data?.keywords}
        />
      </div>
    </div>
  );
};

export default Page;
