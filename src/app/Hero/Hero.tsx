/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
"use client";
import React from "react";

const Hero = () => {
  return (
    <div className=" h-[80vh]">
      <div className="  absolute flex ml-8 md:ml-[650px] mt-[85px]">
        <span className="text-2xl text-white animate-bounce">
          Hello! I Am <span className="text-[#7127BA]">Varun Gaudani</span>
        </span>
      </div>
      <div className=" ml-0 items-center flex justify-center md:ml-[350px] w-full  md:w-[250px] relative ">
        <div className=" pt-44 ">
          <img src="./Me.png" className="rounded-full animate-pulse " />
        </div>
        <img
          src="./Arrow.png"
          className="rounded-full hidden md:block w-[200px] top-10 animate-pulse -right-20 absolute"
        />
      </div>
    </div>
  );
};

export default Hero;
