import { useTranslation } from 'react-i18next';

import { HtmlIcon, CssIcon, JavaScriptIcon, ReactIcon } from '../SVG/Icons';

import styles from './Skills.module.scss';

const About = () => {
  const { t } = useTranslation();

  return (
    <section
      className={styles.container}
      id='skills'
      data-aos='fade-up'
      data-aos-duration='1500'
    >
      <h2 className={styles.header}>{t('skills')}</h2>
      <section className={styles['icons-container']}>
        <figure className={styles.card}>
          <span>HTML</span>
          <HtmlIcon />
        </figure>
        <figure className={styles.card}>
          <span>CSS</span>
          <CssIcon />
        </figure>
        <figure className={styles.card}>
          <span>JavaScript</span>
          <JavaScriptIcon />
        </figure>

        <figure className={styles.card}>
          <span>React</span>
          <ReactIcon />
        </figure>
      </section>
    </section>
  );
};

export default About;
