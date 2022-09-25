import { useTranslation } from 'react-i18next';

import { projectsData } from '../../data/data';
import ProjectCard from '../../components/ProjectCard/ProjectCard';

import styles from './Projects.module.scss';

const Projects = () => {
  const { t } = useTranslation();

  return (
    <div id='projects' className={styles.container}>
      <h2 className={styles.header} data-aos='fade-up' data-aos-duration='1500'>
        {t('projects')}
      </h2>
      <div className={styles.cardsContainer}>
        {projectsData.map((project, index) => {
          return <ProjectCard key={index} {...project} />;
        })}
      </div>
    </div>
  );
};

export default Projects;
