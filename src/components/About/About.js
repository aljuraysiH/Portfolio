import styles from "./About.module.scss";
import { useEffect } from "react";
import CV from "../../assets/Hamad-Aljuraysi.pdf";
import picture from "../../assets/imgs/pp.png";
import AOS from "aos";
import { useTranslation } from "react-i18next";

function About({ id }) {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    AOS.init();
  });
  return (
    <section id={id} className={styles.container}>
      <article
        data-aos="fade-up"
        data-aos-duration="1500"
        className={styles.left}
      >
        <h2 className={i18n.language === "ar" ? styles.headerAr : ""}>
          {t("about_header")}
        </h2>
        <p>{t("about_disc")}</p>
        <h3>{t("about_info")}</h3>
        <div className={styles.about}>
          <span>{t("about_name")}</span>
          <span>{t("about_nat")}</span>
          <span>{t("about_age")}</span>
          <span>{t("about_city")}</span>
          <span>{t("about_degree")}</span>
          <span>{t("about_major")}</span>
          <a href={CV} download>
            {t("about_cv")}
          </a>
        </div>
      </article>
      <figure
        data-aos="fade-up"
        data-aos-duration="1500"
        className={styles.right}
      >
        <img src={picture} alt="profile" />
      </figure>
    </section>
  );
}

export default About;
