import React from "react";
import styles from "./styles.module.css"; // Импорт стилей

interface Props {
  children: React.ReactNode;
  onSearch: (keywords: string) => void;
}

const Search = ({ children, onSearch }: Props) => {
  const [value, setValue] = React.useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(value);
  };

  return (
    <form className={styles.container} onSubmit={handleSearch}>
      <span className={styles.icon}>{children}</span>
      <input
        type="text"
        placeholder="Поиск..."
        className={styles.input}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </form>
  );
};

export default Search;
