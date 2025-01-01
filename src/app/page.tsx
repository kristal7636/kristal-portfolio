import Header from "./Header/Header";
import Hero from "./Hero/Hero";
import { Preahvihear } from "next/font/google";
import Skills from "./Skills/Skills";
import ConnectWithME from "./ConnectWithMe/ConnectWithMe";
import Footer from "./Footer/Footer";
import Contact from "./ContactMe/ContactMe";
import Projects from "./ProjectsWorkedOn/ProjectsWorkedOn";

const preahvihear = Preahvihear({
  weight: "400", // Specify the weight if needed
  subsets: ["latin"], // Subsets of the font
});

export default function Home() {
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
