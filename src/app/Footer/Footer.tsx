"use client";
import React from "react";

const skillsData = [
  { src: "./linkedIn.svg", alt: "HTML5 Logo", label: "LinkedIn", href: "https://in.linkedin.com/in/varun-gaudani-938b79292" },
  { src: "./instagram.svg", alt: "CSS3 Logo", label: "Instagram", href: "https://www.instagram.com/varun_verse_2505/" },
  { src: "./facebook.svg", alt: "JavaScript Logo", label: "Facebook", href: "https://www.facebook.com/profile.php?id=100075145203930" },
//   { src: "./telegram.svg", alt: "ReactJS Logo", label: "Telegram", href: "https://telegram.org" },
  { src: "./gmail.svg", alt: "React Hook Forms Logo", label: "varungaudani80@gmail.com", href: "mailto:varungaudani80@gmail.com" },
];

const Footer = () => {
  return (
    
    <footer className="flex items-center justify-between bg-[#1a0b2e] text-white px-4 py-2 rounded-full mx-auto w-full max-w-5xl">
        <div className="flex items-center space-x-2">
            <div className="bg-black text-white flex items-center justify-center w-8 h-8 rounded-full">
                <span className="text-xs font-bold">VG</span>
            </div>
            <span className="font-bold">VARUN {" "}<span className="text-black">GAUDANI</span></span>
        </div>
        <span className="text-sm">Designed & Built by <span className="font-bold">Varun Gaudani</span></span>
    </footer>

  );
};

export default Footer;
