import styles from "./styles.module.css";

interface Props {
  className?: string;
  children: React.ReactNode;
}

export const Card = ({ className, children }: Props) => {
  return <div className={styles.card + " " + className}>{children}</div>;
};
