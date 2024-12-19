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
          <span className="text-[#7127BA] animate-bounce">Cover</span>
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
      <div className="pl-[20px] md:pl-[100px] lg:pl-[400px] mt-[50px] md:mt-[100px] lg:mt-[150px]">
  <span className="relative text-2xl sm:text-3xl md:text-4xl text-white ">
    I'm a Software Engineer.
  </span>
  <br />
  <span className="text-sm sm:text-base md:text-lg">
    Currently, I'm a <span className="text-[#7127BA] animate-bounce"> Software Engineer</span> at  VEERRANVI TECHNOLOGIES
  </span>
  <br />
  <div className="pt-5 sm:pt-8 md:pt-10">
    <span className="text-sm sm:text-base md:text-lg">
      A Frontend developer, functioning in the industry for 3+ years now.
      <br />
      I make meaningful and delightful digital products that create an equilibrium
      <br />
      between user needs and business goals.
    </span>
  </div>
</div>
</div>
  );
};

export default Hero;
