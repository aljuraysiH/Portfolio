import { useTranslation } from 'react-i18next';

import styles from './Toggle.module.scss';

const Toggle = ({ onClick, theme }) => {
  const { t, i18n } = useTranslation();

  const btnHandler = () => {
    if (i18n.language === 'en') {
      i18n.changeLanguage('ar');
    } else {
      i18n.changeLanguage('en');
    }
  };

  return (
    <div
      className={`${
        i18n.language === 'en' ? styles['toggle-container'] : styles.ar
      }`}
    >
      <div
        className={`${styles.toggle} ${theme === 'dark' ? styles.night : ''}`}
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
        {t('lng')}
      </button>
    </div>
  );
};

export default Toggle;
