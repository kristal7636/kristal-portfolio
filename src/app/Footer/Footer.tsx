"use client";
import React from "react";

const Footer = () => {
  return (
    <footer className=" bg-gradient-to-r from-[#1a0b2e] to-[#560ba1] shadow-lg flex items-center justify-between bg-[#7127BA] text-white px-4 py-2 mx-auto w-full max-w-10xl">
      <div className="flex items-center space-x-2">
        <div className=" cursor-pointer  flex items-center">
          <img
            src="./VS.svg"
            className=" w-12 h-12 rounded-full ml-4 mr-10 sm:ml-14 sm:mr-4"
          />
        </div>
        <span className="font-bold ">
          VARUN <span className="#7127BA">GAUDANI</span>
        </span>
      </div>
      <span className="text-sm sm:mr-4 ml-8">
        Designed & Built by <span className="font-bold">Varun Gaudani</span>
      </span>
    </footer>
  );
};

export default Footer;
