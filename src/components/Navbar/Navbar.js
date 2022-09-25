import { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import useTheme from '../../hooks/useTheme';
import useModal from '../../hooks/useModal';
import Toggle from '../Toggle/Toggle';
import NavLink from './NavLink';

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

  const closeNav = () => setToggle(false);

  return (
    <>
      <div className={styles.navbar}>
        <NavLink to='home' offset={-500}>
          <p className={styles.logo}>{t('logo')}</p>
        </NavLink>
        <Toggle onClick={toggleTheme} theme={theme} />
        <nav className={`${styles.nav} ${toggle ? '' : styles.hidden}`}>
          <NavLink to='about' onClick={closeNav} offset={-70}>
            {t('about')}
          </NavLink>
          <NavLink to='projects' onClick={closeNav} offset={-115}>
            {t('projects')}
          </NavLink>
          <NavLink to='skills' onClick={closeNav} offset={0}>
            {t('skills')}
          </NavLink>

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
