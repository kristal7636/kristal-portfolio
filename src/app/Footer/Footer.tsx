"use client";
import React from "react";


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
