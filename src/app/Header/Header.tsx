"use client";
import React, { useState, useCallback } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = useCallback(() => {
    setMenuOpen((prev) => !prev);
  }, []);

  return (
    <header className="flex items-center justify-between bg-[#1A0B2E] p-4 shadow-md flex-wrap">
      {/* Logo */}
      <div className=" cursor-pointer  flex items-center">
        <img
          src="./Me.png"
          className=" w-14 h-14 rounded-full ml-4 sm:ml-28 sm:mr-16"
        />
        <span className=" text-xl md:text-4xl  text-[#FFFFFF] font-semibold  ">
          VARUN
        </span>
      </div>

      {/* Hamburger Menu Button */}
      <button
        className="md:hidden p-2"
        onClick={toggleMenu}
        aria-label="Toggle Menu"
      >
        {menuOpen ? (
          <X className="w-6 h-6 text-white" />
        ) : (
          <Menu className="w-6 h-6  text-white" />
        )}
      </button>

      {/* Navigation Menu */}
      <nav
        className={`${
          menuOpen ? "flex" : "hidden"
        } md:flex flex-col md:flex-row items-center gap-4 absolute md:static top-[64px] left-0 w-full md:w-auto bg-[#1A0B2E] md:bg-transparent shadow-md md:shadow-none py-4 md:py-0 z-10 transition-transform duration-300 ease-in-out`}
      >
        <ul className="flex flex-col md:flex-row items-center gap-4  ">
          <li className="flex h-10 px-3 py-2 justify-center items-center gap-1.5">
            <a
              href="#"
              className="text-[#FFFFFF] text-right hover:text-red-500  text-xl md:text-2xl font-medium leading-[20px]  hover:text-primaryColor pr-0 md:pr-20"
            >
              Home
            </a>
          </li>
          <li className="flex h-10 px-3 py-2 justify-center items-center gap-1.5">
            <a
              href="#"
              className="text-[#FFFFFF] hover:text-red-500  text-xl md:text-2xl font-medium leading-[20px] hover:text-primaryColor  pr-0 md:pr-20"
            >
              About
            </a>
          </li>
          <li className="flex h-10 px-3 py-2 justify-center items-center gap-1.5 rounded-md">
            <a
              href="#"
              className="text-[#FFFFFF] hover:text-red-500  text-xl md:text-2xl font-medium leading-[20px] hover:text-primaryColor  pr-0 md:pr-20"
            >
              Contact Me
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
