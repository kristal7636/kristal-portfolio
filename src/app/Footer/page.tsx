"use client";
import React from "react";

const Footer = () => {
  return (
    <footer className=" bg-gradient-to-l from-[#043a43] to-[#4e7da1] shadow-lg flex items-center justify-between text-white px-4 py-2 mx-auto w-full max-w-10xl">
      <div className="flex items-center space-x-2">
        <div className=" cursor-pointer  flex items-center">
          <img
            src="./KB.png"
            className=" w-12 h-12 rounded-full ml-4 mr-10 sm:ml-14 sm:mr-4"
          />
        </div>
     
      </div>
      <span className="text-sm sm:mr-4 ml-8">
        Designed & Built by <span className="font-bold">Kristal Bhakhar</span>
      </span>
    </footer>
  );
};

export default Footer;
