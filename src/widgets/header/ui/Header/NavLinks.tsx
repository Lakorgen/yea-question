import styles from "./styles.module.css";
import { Link } from "react-router";

const NavLinks = () => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.nav__list}>
        <li className={styles.nav__item}>
          <Link to="/">База вопросов</Link>
        </li>
        <li className={styles.nav__item}>
          <Link to="/">Тренажер</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavLinks;
