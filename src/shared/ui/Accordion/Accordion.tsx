import React, { useState } from "react";
import styles from "./styles.module.css";
import ArrowSvg from "@/shared/assets/ArrowSvg";

interface Props {
  title: string;
  children: React.ReactNode;
}

const Accordion = ({ title, children }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.accordion}>
      <button className={styles.header} onClick={() => setIsOpen(!isOpen)}>
        <div className={styles.title}>
          <div className={styles.dot}></div>
          {title}
        </div>
        <span className={isOpen ? styles.arrowUp : styles.arrowDown}>
          <ArrowSvg />
        </span>
      </button>
      <div className={`${styles.body} ${isOpen ? styles.open : ""}`}>
        {children}
      </div>
    </div>
  );
};

export default Accordion;
