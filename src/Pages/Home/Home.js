import Hero from "../../components/Hero/Hero";
import Skills from "../../components/Skills/Skills";
import Projects from "../Projects/Projects";
import About from "../../components/About/About";
import { motion } from "framer-motion";
import { homeVariatns } from "./Home.variants";
import Footer from "../../components/Footer/Footer";

import styles from "./Home.module.scss";

const Home = () => {
  return (
    <motion.main
      className={styles.main}
      variants={homeVariatns}
      initial={"hidden"}
      animate={"visible"}
      exit={"exit"}
    >
      <Hero />
      <About id="about" />
      <Projects id="projects" />
      <Skills id="skills" />
      <Footer />
    </motion.main>
  );
};

export default Home;
