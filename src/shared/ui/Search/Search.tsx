import React from "react";
import styles from "./styles.module.css"; // Импорт стилей

interface Props {
  children: React.ReactNode;
}

const Search = ({ children }: Props) => {
  return (
    <div className={styles.container}>
      <span className={styles.icon}>{children}</span>
      <input type="text" placeholder="Поиск..." className={styles.input} />
    </div>
  );
};

export default Search;
