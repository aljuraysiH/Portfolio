import { motion } from 'framer-motion';

import Hero from '../../components/Hero/Hero';
import Skills from '../../components/Skills/Skills';
import Projects from '../Projects/Projects';
import About from '../../components/About/About';
import { homeVariatns } from './Home.variants';
import Footer from '../../components/Footer/Footer';

import styles from './Home.module.scss';

const Home = () => {
  return (
    <motion.main
      className={styles.main}
      variants={homeVariatns}
      initial={'hidden'}
      animate={'visible'}
      exit={'exit'}
      id='home'
    >
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Footer />
    </motion.main>
  );
};

export default Home;
