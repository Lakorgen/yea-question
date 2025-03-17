import { Link } from "react-router";
import styles from "./styles.module.css";
import LogoIcon from "@/shared/assets/LogoIcon";
const Header = () => {
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.header__inner}>
          <div className={styles.links}>
            <Link to="/">
              <LogoIcon />
            </Link>
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
          </div>
          <div className={styles.auth}>
            <button>Войти</button>
            <button>Регистрация</button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
