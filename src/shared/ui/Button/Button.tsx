import React from "react";
import styles from "./styles.module.css";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "outline" | "filled";
  size?: "L" | "M";
  children: React.ReactNode;
}

const Button = ({
  children,
  variant = "filled",
  size = "M",
  onClick,
}: Props) => {
  return (
    <button
      className={`${styles.btn} ${styles[variant]} ${styles[size]}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
