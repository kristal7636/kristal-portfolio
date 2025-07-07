"use client";
import React, { useEffect, useRef, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const skillsData = [
  {
    src: "./linkedIn.svg",
    alt: "HTML5 Logo",
    label: "LinkedIn",
    href: "https://in.linkedin.com/in/kristal-bhakhar-720325207",
  },
  {
    src: "./instagram.svg",
    alt: "CSS3 Logo",
    label: "Instagram",
    href: "https://www.instagram.com/_kristal_7636",
  },
  {
    src: "./facebook.svg",
    alt: "JavaScript Logo",
    label: "Facebook",
    href: "",
  },
  {
    src: "./gmail.svg",
    alt: "React Hook Forms Logo",
    label: "Gmail",
    href: "patelkristal86@gmail.com",
    isGmail: true,
  },
  {
    src: "./github.png",
    alt: "React Hook Forms Logo",
    label: "GitHub",
    href: "https://github.com/kristal7636",
  },
];

const ConnectWithME = () => {
  const [isVisible, setIsVisible] = useState(false);
  const connectRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);

  const handleIntersection = ([entry]: IntersectionObserverEntry[]) => {
    if (entry.isIntersecting) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      root: null,
      threshold: 0.2,
      rootMargin: "0px 0px -20% 0px",
    });

    if (connectRef.current) {
      observer.observe(connectRef.current);
    }

    return () => {
      if (connectRef.current) {
        observer.unobserve(connectRef.current);
      }
    };
  }, []);

  const handleGmailClick = () => {
    const screenWidth = window.innerWidth;

    if (screenWidth <= 768) {
      window.location.href = "mailto:varungaudani80@gmail.com";
    } else {
      window.location.href =
        "https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=DmwnWrRvwdQRWjVlbjBHhXPmQGXWRrjFPvGVGVVSxxNHhHfQJGgVflhxCBGCtjWJLwwLvLqxhFBG";
    }
  };

  return (
    <div
      ref={connectRef}
      id="ConnectWithMe"
      className={`flex flex-col gap-2 md:gap-8 my-20 sm:mt-10 md:mt-36 ${
        isVisible ? "animate-fade-in-from-bottom" : ""
      }`}
    >
      <div className="flex justify-center">
        <h1 className="text">
          <p className="letter text-3xl md:text-4xl flex">Connect With Me</p>
        </h1>
      </div>
      <div
        className="mx-0 md:mx-40 mt-10 flex flex-wrap gap-4 justify-center"
        data-aos="zoom-in"
      >
        {skillsData.map((skill, index) => (
          <a
            key={index}
            href={skill.isGmail ? "#" : skill.href}
            target={skill.isGmail ? "_self" : "_blank"}
            rel={skill.isGmail ? undefined : "noopener noreferrer"}
            onClick={skill.isGmail ? handleGmailClick : undefined}
            className="min-w-[50px] my-0 mx-0 md:my-2 border md:mx-2 backdrop-blur-md backdrop-brightness-150 md:py-4 md:px-6 py-2 px-4 rounded-full flex items-center justify-center shadow-lg"
          >
            <img
              src={skill.src}
              alt={skill.alt}
              className="mr-4 md:h-12 h-6 md:w-12 w-6"
            />
            <h1 className="text-center text-lg md:text-3xl">{skill.label}</h1>
          </a>
        ))}
      </div>
      <div className="flex justify-center">
        <img className="" src="./avatar-mac.svg" alt="" />
      </div>
    </div>
  );
};

export default ConnectWithME;
