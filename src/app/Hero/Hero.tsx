/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
"use client";
import React from "react";

const Hero = () => {
  return (
    <div className=" h-screen">
      <div className=" absolute flex  ml-[650px] mt-[85px]">
        <span className="text-2xl text-white">
          Hello! I Am <span className="text-[#7127BA]">Varun Gaudani</span>
        </span>
      </div>
      <div className=" ml-[350px]  w-[250px] relative ">
        <div className=" pt-44 ">
          <img src="./Me.png" className="rounded-full " />
        </div>
        <img
          src="./Arrow.png"
          className="rounded-full w-[200px] top-10  -right-20 absolute"
        />
      </div>
    </div>
  );
};

export default Hero;
