"use client";
import React from "react";

const Hero = () => {
  return (
    <div className=" ">
      <div className="  absolute flex ml-8 md:ml-[550px] mt-[85px] ">
        <span className="text-2xl text-white animate-bounce">
          Hello! I Am <span className="text-[#7127BA]">Varun Gaudani</span>
        </span>
      </div>
      <div className=" z-50 absolute ml-8  md:ml-[550px] mt-40 md:mt-[240px]">
        <span className="text-4xl text-white mt-36 keyboard 	 ">
          {" "}
          Judge a book <br /> by its <span className="key">C</span>
          <span className="key">o</span>
          <span className="key">v</span>
          <span className="key">e</span>
          <span className="key">r</span>
        </span>
        <p className="text-white text-xl mt-[10px]">
          Because if the cover does not impress you what else can?
        </p>
      </div>
      <div className="  ml-0 items-center flex justify-center md:ml-[250px] w-full  md:w-[250px] relative ">
        <div className=" pt-44  ">
          <img
            src="./avatar-imac.svg"
            className="rounded-full md:animate-pulse opacity-50 md:opacity-80 md:mb-0 mb-10 "
          />
        </div>
        <img
          src="./Arrow.png"
          className="rounded-full hidden md:block w-[200px] top-10 animate-pulse -right-20 absolute"
        />
      </div>
      <div className="pl-[30px] md:pl-[50px] lg:pl-[200px] mt-[50px] md:mt-[100px] lg:mt-[150px]">
        <span className="relative text-2xl sm:text-3xl md:text-4xl text-white ">
          I am a Software Engineer.
        </span>
        <br />
        <span className="text-sm sm:text-base md:text-lg  text-white">
          Currently, I am a{" "}
          <span className="text-[#7127BA] ">Software Engineer</span> at
          VEERRANVI TECHNOLOGIES
        </span>

        <div className="pt-5 sm:pt-8 md:pt-10  text-white  ">
          <span className="text-sm sm:text-base md:text-lg  ">
            A Frontend developer, functioning in the industry for 3+ years now.
            I make meaningful and delightful digital products that create an
            between user needs and business goals.
          </span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
