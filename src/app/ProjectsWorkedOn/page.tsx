"use client";
import { Link } from "lucide-react";
import React, { useState, useEffect } from "react";

interface Skill {
  src: string;
  alt: string;
  label: string;
}

export default function CricTracker() {
  const [transformStyle, setTransformStyle] = useState<React.CSSProperties>({});
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const checkMobile = () => {
      const isMobileDevice = /iPhone|iPad|iPod|Android/i.test(
        navigator.userAgent
      );
      setIsMobile(isMobileDevice);
    };

    checkMobile();

    if (isMobile) {
      const handleDeviceOrientation = (e: DeviceOrientationEvent) => {
        const rotateX = (e.beta ?? 0) / 10;
        const rotateY = (e.gamma ?? 0) / 10;

        setTransformStyle({
          transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
        });
      };

      window.addEventListener("deviceorientation", handleDeviceOrientation);

      return () => {
        window.removeEventListener(
          "deviceorientation",
          handleDeviceOrientation
        );
      };
    }
  }, [isMobile]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isMobile) return;

    const card = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - card.left;
    const y = e.clientY - card.top;
    const centerX = card.width / 2;
    const centerY = card.height / 2;

    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;

    setTransformStyle({
      transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
    });
  };

  const handleMouseLeave = () => {
    setTransformStyle({
      transform: "perspective(1000px) rotateX(0deg) rotateY(0deg)",
      transition: "transform 0.5s ease-out",
    });
  };

  const skillsData: Skill[] = [
    { src: "./html5.svg", alt: "HTML5 Logo", label: "HTML5" },
    { src: "./CSS3.svg", alt: "CSS3 Logo", label: "CSS3" },
    { src: "./js.svg", alt: "JavaScript Logo", label: "JavaScript" },
    { src: "./RJS.svg", alt: "ReactJS Logo", label: "ReactJS" },
    { src: "./Bts.png", alt: "Bootstrap Logo", label: "Bootstrap" },

    { src: "./TW.svg", alt: "Tailwind CSS Logo", label: "Tailwind CSS" },
    {
      src: "./SC.svg",
      alt: "Styled Components Logo",
      label: "Styled Components",
    },
    { src: "./G.svg", alt: "Git Logo", label: "GIT" },
  ];

  return (
    <div className="px-4 md:px-8 lg:px-16" id="projects">
      <div className="flex flex-col md:flex-row justify-between items-center mb-8">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center md:text-left mb-4 md:mb-0">
          Projects I’ve <br /> Worked on
        </h2>
      </div>
      <div
        className="py-8 px-4 sm:px-6 md:px-8  drop-shadow-2xl lg:px-12 shadow-lg text-white flex flex-col md:flex-row gap-8 md:gap-12 rounded-3xl bg-gradient-to-r from-[#1a0b2e] to-[#560ba1]"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          ...transformStyle,
          transition: transformStyle.transition || "none",
        }}
      >
        {/* Left Section */}
        <div
          className="flex-1 flex justify-center md:justify-start "
          data-aos="flip-right"
        >
          <div className="w-48 h-60 sm:w-60 sm:h-72 md:w-90 md:h-96 lg:w-[300px] lg:h-[350px]">
            <img
              src="CI.png"
              alt="CricTracker UI"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>

        {/* Right Section */}
        <div className="flex-1 flex flex-col gap-6  " data-aos="fade-left">
          {/* Title */}
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-center md:text-left">
            CEMENTECH INFRA
          </h1>

          {/* Technologies Used */}
          <div className="flex flex-wrap gap-4 justify-center md:justify-start ">
            {skillsData.map((skill, index) => (
              <div
                key={index}
                className="backdrop-blur-md backdrop-brightness-150 px-4 py-2 text-white border rounded-full flex items-center gap-2 shadow-lg transform group-hover:scale-110 transition-transform"
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

          <div className="flex justify-center md:justify-start">
            <a
              href="https://cementech-infra.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button
                type="submit"
                className="w-full border md:w-auto py-3 px-6 bg-gradient-to-r from-[#560ba1] to-[#1a0b2e] text-white rounded-full flex items-center justify-center gap-4 shadow-md hover:scale-105 transition-transform"
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
