import { useEffect } from "react";

import "aos/dist/aos.css";
import styles from "./Card.module.scss";
import AOS from "aos";
import { useTranslation } from "react-i18next";

const Card = ({ img, name, description, arDescription, link }) => {
  const { t, i18n } = useTranslation();
  useEffect(() => {
    AOS.init();
  });
  return (
    <div
      className={styles.flipCard}
      data-aos="fade-up"
      data-aos-duration="1500"
    >
      <div className={styles.card}>
        <figure className={styles["card-front"]}>
          <img src={img} alt="img" />
        </figure>
        <figcaption className={styles["card-back"]}>
          <h4>{name}</h4>
          <p>{i18n.language === "en" ? description : arDescription}</p>
          <a
            href={link}
            className={styles.btn}
            target={link === "#projects" ? "" : "_blank"}
            rel="noreferrer"
          >
            {t("view_website")}
            <span></span>
          </a>
        </figcaption>
      </div>
    </div>
  );
};

export default Card;
