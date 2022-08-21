import { useEffect } from "react";
import styles from "./Skills.module.scss";
import { HtmlIcon, CssIcon, JavaScriptIcon, ReactIcon } from "../SVG/Icons";
import AOS from "aos";
import { useTranslation } from "react-i18next";

const About = ({ id }) => {
  const { t } = useTranslation();
  useEffect(() => {
    AOS.init();
  });
  return (
    <section
      className={styles.container}
      id={id}
      data-aos='fade-up'
      data-aos-duration='1500'
    >
      <h2 className={styles.header}>{t("skills")}</h2>
      <section className={styles["icons-container"]}>
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
