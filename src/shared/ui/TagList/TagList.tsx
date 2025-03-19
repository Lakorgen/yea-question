import { useState } from "react";
import styles from "./styles.module.css";

interface Item {
  id: number;
  title: string;
}

interface Props {
  items: Item[];
  title: string;
  onChange: (value: string) => void;
}

const TagList = ({ items, title, onChange }: Props) => {
  const [selectedItems, setSelectedItems] = useState<number[]>([]);
  const [isExpanded, setIsExpanded] = useState(false);
  console.log(selectedItems);

  const toggleItem = (id: number) => {
    setSelectedItems((prev) => {
      const newSelected = prev.includes(id)
        ? prev.filter((i) => i !== id)
        : [...prev, id];

      onChange(newSelected.join(","));
      return newSelected;
    });
  };

  return (
    <div className={styles.container}>
      <h3>{title}</h3>
      <div className={`${styles.list} ${isExpanded ? styles.expanded : ""}`}>
        {items.map(({ id, title }) => (
          <button
            key={id}
            className={`${styles.tag} ${
              selectedItems.includes(id) ? styles.selected : ""
            }`}
            onClick={() => toggleItem(id)}
          >
            {title}
          </button>
        ))}
      </div>
      {items.length > 5 && (
        <button
          className={styles.showMore}
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {isExpanded ? "Скрыть" : "Показать все"}
        </button>
      )}
    </div>
  );
};

export default TagList;
