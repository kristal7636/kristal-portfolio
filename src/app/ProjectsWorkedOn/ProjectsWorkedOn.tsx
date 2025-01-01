import { Link } from "lucide-react";
import React from "react";

export default function CricTracker() {
  const skillsData = [
    { src: "./html5.svg", alt: "HTML5 Logo", label: "HTML5" },
    { src: "./CSS3.svg", alt: "CSS3 Logo", label: "CSS3" },
    { src: "./js.svg", alt: "JavaScript Logo", label: "JavaScript" },
    { src: "./RJS.svg", alt: "ReactJS Logo", label: "ReactJS" },
    { src: "./Bts.png", alt: "Bootstrap Logo", label: "Bootstrap" },
    {
      src: "./RHF.svg",
      alt: "React Hook Forms Logo",
      label: "React Hook Forms",
    },
    { src: "./TW.svg", alt: "Tailwind CSS Logo", label: "Tailwind CSS" },
    {
      src: "./SC.svg",
      alt: "Styled Components Logo",
      label: "Styled Components",
    },
    { src: "./G.svg", alt: "Git Logo", label: "GIT" },
  ];
  return (
    <div className="px-4 md:px-8 lg:px-16">
      <div className="flex flex-col md:flex-row justify-between items-center mb-8">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center md:text-left mb-4 md:mb-0">
          Projects I’ve <br /> Worked on
        </h2>
      </div>
      <div className="py-8 px-6 md:px-8 lg:px-12 shadow-lg text-white flex flex-col md:flex-row gap-8 md:gap-12 rounded-3xl bg-gradient-to-r from-[#1a0b2e] to-[#560ba1]">
        {/* Left Section */}
        <div className="flex-1 flex justify-center md:justify-start">
          <div className="w-60 h-72 md:w-80 md:h-96 lg:w-[300px] lg:h-[350px]">
            <img
              src="avatar-imac.svg" // Replace with your image path
              alt="CricTracker UI"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>

        {/* Right Section */}
        <div className="flex-1 flex flex-col gap-6">
          {/* Title */}
          <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-center md:text-left">
            CEMENTECH INFRA
          </h1>

          {/* Technologies Used */}
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            {skillsData.map((skill, index) => (
              <div
                key={index}
                className="backdrop-blur-md backdrop-brightness-150 px-4 py-2 text-white rounded-full flex items-center gap-2 shadow-lg"
              >
                <img
                  src={skill.src}
                  alt={skill.alt}
                  className={`h-6 w-6 ${
                    skill.label === "ReactJS" || skill.label === "Redux"
                      ? "animate-spin"
                      : ""
                  }`}
                />
                <h1 className="text-center text-sm md:text-base">
                  {skill.label}
                </h1>
              </div>
            ))}
          </div>

          {/* Button */}
          <div className="flex justify-center md:justify-start">
            <a
              href="https://cementech-infra-mevpasjh9-varun1452s-projects.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button
                type="submit"
                className="w-full md:w-auto py-3 px-6 bg-gradient-to-r from-[#560ba1] to-[#1a0b2e] text-white rounded-full flex items-center justify-center gap-4 shadow-md hover:scale-105 transition-transform"
              >
                <Link />
                Go to CEMENTECH INFRA
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
