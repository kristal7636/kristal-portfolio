import { Link } from "lucide-react";
import React from "react";

export default function CricTracker() {
  const skillsData = [
    { src: "./html5.svg", alt: "HTML5 Logo", label: "HTML5" },
    { src: "./CSS3.svg", alt: "CSS3 Logo", label: "CSS3" },
    { src: "./js.svg", alt: "JavaScript Logo", label: "JavaScript" },
    { src: "./RJS.svg", alt: "ReactJS Logo", label: "ReactJS" },
    { src: "./Bts.png", alt: "NextJS Logo", label: "Bootstrap" },
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
    <div className="">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-10">
          Projects I’ve <br /> Worked on
        </h2>
        {/* <div className="w-8 h-8 flex justify-center items-center rounded-full border">
            <i className="text-lg font-bold text-white border">i</i>
          </div> */}
      </div>
      <div className=" w-[150vh] py-10 ml-[140px] shadow-l text-white flex flex-col md:flex-row gap-8 md:gap-12 rounded-3xl bg-gradient-to-r from-[#1a0b2e] to-[#560ba1] ">
        {/* Left Section */}
        <div className="flex-1">
          <div className=" overflow-hidden w-[300px] h-[350px] ml-28 ">
            <img
              src="avatar-imac.svg" // Replace with your image path
              alt="CricTracker UI"
              className="w-full"
            />
          </div>
        </div>

        {/* Right Section */}
        <div className="flex-1 flex flex-col gap-6 mr-28  ">
          {/* Title */}
          <div className="flex justify-between items-center">
            <h1 className="font-bold">CEMENTECH INFRA</h1>
          </div>
          {/* Description */}
          {/* <p className="text-sm sm:text-base md:text-lg">
            Worked on <span className="font-semibold">Website</span>
          </p> */}
          {/* Technologies Used */}
          <div className=" flex flex-wrap   ">
            {skillsData.map((skill, index) => (
              <div
                key={index}
                className="backdrop-blur-md backdrop-brightness-150 min-w-[50px] my-0  mx-0 md:my-2 px-2 py-2 md:mx-2  text-white rounded-full flex items-center justify-center shadow-lg"
              >
                <img
                  src={skill.src}
                  alt={skill.alt}
                  className={`mr-2 h-6 w-6 ${
                    skill.label === "ReactJS"
                      ? "animate-spin"
                      : skill.label === "Redux"
                      ? "animate-spin"
                      : ""
                  }`}
                />
                <h1 className="text-center text-lg ">{skill.label}</h1>
              </div>
            ))}
          </div>
          {/* Button */}
          <a
            href="https://cementech-infra-mevpasjh9-varun1452s-projects.vercel.app/"
            target="_blank"
          >
            <button
              type="submit"
              className="w-[350px] py-2 bg-blue-500 text-white rounded-full bg-gradient-to-r from-[#560ba1] to-[#1a0b2e] flex items-center justify-center gap-4"
            >
              <Link />
              Go to CIMENTECH INFRA
            </button>{" "}
          </a>{" "}
        </div>
      </div>{" "}
    </div>
  );
}
