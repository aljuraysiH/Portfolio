import { heroVariantsLeft, heroVariantsRight } from "./HeroVariants";
import styles from "./Hero.module.scss";
import SVG from "../SVG/SVG";
import { TwitterLogo, LinkedinLogo, GithubLogo } from "phosphor-react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import useModal from "../../hooks/useModal";
import Social from "../Social/Social";

const Hero = () => {
  const { showModal, setShowModal } = useModal();
  const { t } = useTranslation();
  return (
    <section className={styles.container} id='hero'>
      <motion.article
        className={styles.left}
        variants={heroVariantsLeft}
        initial='hidden'
        animate='visiable'
      >
        <h2 className={styles["hero-header"]}>
          <span>
            {t("welcome")} <br></br>
          </span>
          {t("name")}
        </h2>
        <p className={styles["hero-text"]}>{t("info")}</p>
        <a
          href='/'
          className={`btng ${styles.btn}`}
          onClick={(e) => {
            e.preventDefault();
            setShowModal(!showModal);
          }}
        >
          <span></span>
          {t("hire_me")}
        </a>
        <div className={styles.socials}>
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
      </motion.article>
      <motion.figure
        className={styles["img-container"]}
        variants={heroVariantsRight}
        initial='hidden'
        animate='visiable'
      >
        <SVG />
      </motion.figure>
    </section>
  );
};

export default Hero;
