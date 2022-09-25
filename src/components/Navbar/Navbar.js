import { useState, useEffect } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import useTheme from '../../hooks/useTheme';
import useModal from '../../hooks/useModal';
import Toggle from '../Toggle/Toggle';

import styles from './Navbar.module.scss';

const Navbar = () => {
  const { showModal, setShowModal } = useModal();
  const { t, i18n } = useTranslation();
  const [toggle, setToggle] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    document.documentElement.className = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);

  const handleContactBTN = (e) => {
    e.preventDefault();
    setToggle(false);
    setShowModal(!showModal);
  };

  console.log(t('about'));

  return (
    <>
      <div className={styles.navbar}>
        <Link to={'/'}>
          <p className={styles.logo}>{t('logo')}</p>
        </Link>
        <Toggle onClick={toggleTheme} theme={theme} />
        <nav className={`${styles.nav} ${toggle ? '' : styles.hidden}`}>
          <a href='#about' onClick={() => setToggle(false)}>
            {t('about')}
          </a>
          <a href='#projects' onClick={() => setToggle(false)}>
            {t('projects')}
          </a>
          <a href='#skills' onClick={() => setToggle(false)}>
            {t('skills')}
          </a>
          <a href='/' className='btng' onClick={handleContactBTN}>
            <span></span>
            {t('contact')}
          </a>
        </nav>
        <button
          className={`${styles.menu} ${toggle ? styles.open : ''} ${
            i18n.language === 'ar' ? styles.ar : styles.en
          }`}
          onClick={() => setToggle(!toggle)}
        ></button>
      </div>
      <Outlet />
    </>
  );
};

export default Navbar;
