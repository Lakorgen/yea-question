import Button from "@/shared/ui/Button/Button";
import styles from "./styles.module.css";

const AuthButtons = () => {
  return (
    <div className={styles.auth}>
      <Button variant="outline" size="M">
        Войти
      </Button>
      <Button variant="filled" size="M">
        Регистрация
      </Button>
    </div>
  );
};

export default AuthButtons;
