"use client";
import { motion } from "framer-motion";
import { Preahvihear } from "next/font/google";
import Header from "./Header/Header";
import Hero from "./Hero/Hero";
import Skills from "./Skills/Skills";
import ConnectWithME from "./ConnectWithMe/ConnectWithMe";
import Footer from "./Footer/Footer";
import Contact from "./ContactMe/ContactMe";
import Projects from "./ProjectsWorkedOn/ProjectsWorkedOn";

const preahvihear = Preahvihear({
  weight: "400", // Specify the weight if needed
  subsets: ["latin"], // Subsets of the font
});

const fadeInVariants = (direction) => ({
  hidden: {
    opacity: 0,
    x: direction === "left" ? -100 : direction === "right" ? 100 : 0,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeInOut" },
  },
});

export default function Home() {
  return (
    <div className={`${preahvihear.className}`}>
      <Header />
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        variants={fadeInVariants("right")}
      >
        <Hero />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        variants={fadeInVariants("left")}
      >
        <Skills />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        variants={fadeInVariants("right")}
      >
        <ConnectWithME />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        variants={fadeInVariants("left")}
      >
        <Projects />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        variants={fadeInVariants("right")}
      >
        <Contact />
      </motion.div>

      <Footer />
    </div>
  );
}
