"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Hero = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className=" " id="hero">
      <div
        className="absolute flex ml-8 md:ml-[550px] mt-[85px] text-xl"
        data-aos="fade-left"
      >
        <p>Hello 👋 I’m</p>
        <section className="animation">
          <div className="first">
            <div>Kristal Bhakhar</div>
          </div>
          <div className="second">
            <div>Web Developer</div>
          </div>
          <div className="third">
            <div>Software Engineer</div>
          </div>
        </section>
      </div>
      <div
        className="z-40 absolute ml-8 md:ml-[550px] mt-40 md:mt-[240px]"
        data-aos="fade-left"
      >
        <span className="text-4xl text-white mt-36 keyboard">
          Judge a book <br /> by its <span className="key">C</span>
          <span className="key">o</span>
          <span className="key">v</span>
          <span className="key">e</span>
          <span className="key">r</span>
        </span>
        <p className="text-white text-xl mt-[10px]">
          Because if the cover does not impress you, what else can?
        </p>
      </div>
      <div
        className="ml-0 items-center flex flex-col justify-center md:ml-[250px] w-full md:w-[250px] relative"
        data-aos="fade-left"
      >
        <div className="pt- md:pt-44 opacity-50 md:opacity-100">
          <img
            src="./avatar-imac.svg"
            className="rounded-full md:animate-pulse opacity-50 md:opacity-80 md:mb-0 mb-10"
            data-aos="flip-right"
          />
        </div>
        <img
          src="./Arrow.png"
          className="rounded-full hidden md:block w-[200px] top-10 animate-pulse -right-20 absolute"
        />
        <a
          href="./Varun_Gaudani.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 text-white  px-6 py-3 rounded-lg text-lg font-semibold bg-gradient-to-r from-[#560ba1] to-[#1a0b2e] transition-all glow-on-hover"
        >
          Download CV
        </a>
      </div>
      <div
        className="pr-[15px] md:ml-32 pl-[30px] md:pl-[50px] lg:pl-[200px] mt-[50px] md:mt-[100px] lg:mt-[150px]"
        data-aos="zoom-in"
      >
        <h2 className="relative text-2xl sm:text-3xl md:text-4xl text-white">
          I am a Software Engineer.
        </h2>
        <br />
       
        <div className="pt-5 sm:pt-8 md:pt-10 text-white mr-10 md:mr-[400px]">
          <p className="text-sm sm:text-base md:text-lg inline">
            <span className="shine">
              A Frontend developer, functioning in the industry for 3+ years
              now. {""}
            </span>
            <span className="shine">
              I make meaningful and delightful digital products that create an{" "}
            </span>
            <span className="shine">
              equilibrium between user needs and business goals.
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
