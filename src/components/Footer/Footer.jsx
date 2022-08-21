import styles from "./Footer.module.scss";
import { TwitterLogo, LinkedinLogo, GithubLogo, ArrowUp } from "phosphor-react";

import Social from "../Social/Social";

const Footer = () => {
  return (
    <footer className={styles.container}>
      <a href='#hero'>
        <ArrowUp className={styles.social} />
      </a>

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
