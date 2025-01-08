"use client";
import { useEffect } from "react";
import { Preahvihear } from "next/font/google";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import Header from "./Header/Header";
import Hero from "./Hero/Hero";
import Skills from "./Skills/Skills";
import ConnectWithME from "./ConnectWithMe/ConnectWithMe";
import Footer from "./Footer/Footer";
import Contact from "./ContactMe/ContactMe";
import Projects from "./ProjectsWorkedOn/ProjectsWorkedOn";

const preahvihear = Preahvihear({
  weight: "400",
  subsets: ["latin"],
});

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      offset: 50, // Offset to trigger animation
      easing: "ease-in-out", // Animation easing
      once: true, // Whether animation should happen only once
    });
  }, []);

  return (
    <div className={`${preahvihear.className}`}>
      <Header />
      <Hero />
      <Skills />
      <ConnectWithME />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
