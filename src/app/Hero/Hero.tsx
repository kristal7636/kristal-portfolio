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
      <div className=" z-50 absolute ml-8 md:ml-[650px] mt-40 md:mt-[240px]">
        <span className="text-6xl text-white mt-36">
          Judge a book <br /> by its
          <span className="text-[#7127BA]">Cover</span>
        </span>{" "}
        <p className="text-white text-xl mt-[10px]">
          Because if the cover does not impress you what else can?
        </p>
      </div>
      <div className=" ml-0 items-center flex justify-center md:ml-[350px] w-full  md:w-[250px] relative ">
        <div className=" pt-44 ">
          <img
            src="./Me.png"
            className="rounded-full md:animate-pulse opacity-50 "
          />
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
