import { useEffect, useState } from "react";
import useModal from "../../hooks/useModal";
import Hero from "../../components/Hero/Hero";
import Skills from "../../components/Skills/Skills";
import Projects from "../Projects/Projects";
import About from "../../components/About/About";
import { motion } from "framer-motion";
import { homeVariatns } from "./Home.variants";
import Footer from "../../components/Footer/Footer";

import styles from "./Home.module.scss";

const Home = () => {
  const { isMessageSent, setIsMessageSent } = useModal();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsMessageSent(false);
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, [isMessageSent]);

  return (
    <motion.main
      className={styles.main}
      variants={homeVariatns}
      initial={"hidden"}
      animate={"visible"}
      exit={"exit"}
    >
      <div className={`${styles.message} ${isMessageSent ? styles.show : ""}`}>
        <p>Email Sent Successfully</p>
      </div>
      <Hero />
      <About id='about' />
      <Projects id='projects' />
      <Skills id='skills' />
      <Footer />
    </motion.main>
  );
};

export default Home;
