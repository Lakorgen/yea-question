import { Link } from "react-router";
import styles from "./styles.module.css";
import LogoIcon from "@/shared/assets/LogoIcon";
import NavLinks from "./NavLinks";
import AuthButtons from "./AuthButtons";
const Header = () => {
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.header__inner}>
          <div className={styles.links}>
            <Link to="/">
              <LogoIcon />
            </Link>
            <NavLinks />
          </div>
          <AuthButtons />
        </div>
      </div>
    </header>
  );
};

export default Header;
