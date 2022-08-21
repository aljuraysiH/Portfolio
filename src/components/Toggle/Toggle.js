import styles from "./Toggle.module.scss";
import { useTranslation } from "react-i18next";
const Toggle = ({ onClick, theme, language, setLanguage }) => {
  const { t, i18n } = useTranslation();

  const btnHandler = () => {
    if (language === "en") {
      setLanguage("ar");
    } else {
      setLanguage("en");
    }
  };

  return (
    <div
      className={`${
        i18n.language === "en" ? styles["toggle-container"] : styles.ar
      }`}
    >
      <div
        className={`${styles.toggle} ${theme === "dark" ? styles.night : ""}`}
        onClick={onClick}
      >
        <div className={styles.day}></div>
        <div>
          <div className={`${styles.shape} ${styles.sm}`}></div>
          <div className={`${styles.shape} ${styles.sm}`}></div>
          <div className={`${styles.shape} ${styles.md}`}></div>
          <div className={`${styles.shape} ${styles.lg}`}></div>
        </div>
      </div>
      <button className={styles.lang} onClick={btnHandler}>
        {t("lng")}
      </button>
    </div>
  );
};

export default Toggle;
