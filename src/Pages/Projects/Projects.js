import { useEffect } from "react";
import styles from "./Projects.module.scss";
import { projectsData } from "../../data/data";
import AOS from "aos";
import "aos/dist/aos.css";
import { useTranslation } from "react-i18next";
import ProjectCard from "../../components/ProjectCard/ProjectCard";

const Projects = ({ id }) => {
  const { t } = useTranslation();
  useEffect(() => {
    AOS.init();
  });
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="1500"
      id={id}
      className={styles.container}
    >
      <h2 className={styles.header}>{t("projects")}</h2>
      <div className={styles.cardsContainer}>
        {projectsData.map((project, index) => {
          return <ProjectCard key={index} {...project} />;
        })}
      </div>
    </div>
  );
};

export default Projects;
