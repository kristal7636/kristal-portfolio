"use client";
import React from "react";

const skillsData = [
  { src: "./html5.svg", alt: "HTML5 Logo", label: "HTML5" },
  { src: "./CSS3.svg", alt: "CSS3 Logo", label: "CSS3" },
  { src: "./js.svg", alt: "JavaScript Logo", label: "JavaScript" },
  { src: "./RJS.svg", alt: "ReactJS Logo", label: "ReactJS" },
  { src: "./nodejs-icon.svg", alt: "Node Logo", label: "Node JS" },
  { src: "./NJS.svg", alt: "NextJS Logo", label: "NextJS" },
  { src: "./RHF.svg", alt: "React Hook Forms Logo", label: "React Hook Forms" },
  { src: "./TW.svg", alt: "Tailwind CSS Logo", label: "Tailwind CSS" },
  {
    src: "./SC.svg",
    alt: "Styled Components Logo",
    label: "Styled Components",
  },
  { src: "./G.svg", alt: "Git Logo", label: "GIT" },
];

const Skills = () => {
  return (
    <div
      className=" flex flex-col gap-2 md:gap-8 my-20 sm:mt-10 md:mt-36 bg-hero-pattern bg-custom-size bg-no-repeat     bg-custom-center
     bg-custom-small sm:bg-custom-medium md:bg-custom-large "
      id="skills"
    >
      <div className="flex justify-center">
        <h2 className="text">
          <p className="letter text-3xl md:text-4xl flex">
            S<span className="transform letter-2 inline-block">K</span>i l l s
          </p>
        </h2>
      </div>
      <div
        className="  mx-0 md:mx-40 mt-10 flex flex-wrap gap-4 justify-center"
        data-aos="zoom-in"
      >
        {skillsData.map((skill, index) => (
          <div
            key={index}
            className="border backdrop-blur-md backdrop-brightness-150 min-w-[50px] my-0  mx-0 md:my-2  md:mx-2  text-white md:py-4 md:px-6  py-2 px-4 rounded-full flex items-center justify-center shadow-lg"
          >
            <img
              src={skill.src}
              alt={skill.alt}
              className={`mr-4 md:h-12 h-6  md:w-12 w-6 ${
                skill.label === "ReactJS"
                  ? "animate-spin"
                  : skill.label === "Redux"
                  ? "animate-spin"
                  : ""
              }`}
            />
            <h1 className="text-center  text-lg md:text-3xl">{skill.label}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
