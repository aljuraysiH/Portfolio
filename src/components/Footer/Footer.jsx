import { TwitterLogo, LinkedinLogo, GithubLogo, ArrowUp } from 'phosphor-react';
import { animateScroll as scroll } from 'react-scroll';

import Social from '../Social/Social';

import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.container}>
      <button onClick={() => scroll.scrollToTop()} className={styles.btn}>
        <ArrowUp className={styles.social} />
      </button>

      <div className={styles.icons}>
        <Social href='https://github.com/aljuraysiH'>
          <GithubLogo weight='regular' className={styles.social} />
        </Social>

        <Social href='https://www.linkedin.com/in/hamad-aljuraysi'>
          <LinkedinLogo weight='regular' className={styles.social} />
        </Social>

        <Social href='https://twitter.com/HamadDev'>
          <TwitterLogo weight='regular' className={styles.social} />
        </Social>
      </div>
    </footer>
  );
};
export default Footer;
