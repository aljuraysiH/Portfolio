import { useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import { useTranslation } from "react-i18next";

import styles from "./ProjectCard.module.scss";

const ProjectCard = ({ img, name, link, github }) => {
  const { t } = useTranslation();

  useEffect(() => {
    AOS.init();
  });

  return (
    <article
      className={styles.cardContainer}
      data-aos="fade-up"
      data-aos-duration="1500"
    >
      <div
        className={styles.card}
        style={{ backgroundImage: `url(${img})` }}
      ></div>
      <div className={styles.details}>
        <h2>{name}</h2>
        <div className={styles.btns}>
          <a href={link} target="_blank" rel="noreferrer">
            {t("view_website")}
          </a>
          <a href={github} target="_blank" rel="noreferrer" className="">
            Github
          </a>
        </div>
      </div>
    </article>
  );
};
export default ProjectCard;
