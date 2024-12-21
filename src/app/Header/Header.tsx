"use client";
import React, { useState, useCallback, useEffect } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState(() =>
    typeof window !== "undefined"
      ? localStorage.getItem("theme") || "light"
      : "light"
  );

  const toggleMenu = useCallback(() => {
    setMenuOpen((prev) => !prev);
  }, []);

  const toggleTheme = useCallback(() => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  }, [theme]);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <header className="flex items-center justify-between p-2 flex-wrap bg-gradient-to-r from-[#1a0b2e] to-[#560ba1] shadow-lg">
      {/* Logo */}
      <div className="cursor-pointer flex items-center">
        <img
          src="./VS.png"
          className="w-14 h-14 rounded-full ml-4 sm:ml-28 sm:mr-16"
        />
        <span className="text-xl md:text-4xl ml-4 md:ml-0 text-[#FFFFFF] font-semibold">
          VARUN
        </span>
      </div>

      {/* Theme Toggle Button */}
      <button
        onClick={toggleTheme}
        className="p-2 rounded-full bg-white text-black dark:bg-black dark:text-white transition-colors"
        aria-label="Toggle Theme"
      >
        {theme === "light" ? <Moon /> : <Sun />}
      </button>

      {/* Hamburger Menu Button */}
      <button
        className="md:hidden p-2"
        onClick={toggleMenu}
        aria-label="Toggle Menu"
      >
        {menuOpen ? (
          <X className="w-6 h-6 text-white" />
        ) : (
          <Menu className="w-6 h-6 text-white" />
        )}
      </button>

      {/* Navigation Menu */}
      <nav
        className={`${
          menuOpen ? "flex" : "hidden"
        } md:flex flex-col md:flex-row items-center gap-4 absolute md:static top-[64px] left-0 w-full md:w-auto bg-gradient-to-r from-[#1a0b2e] to-[#560ba1] md:bg-none shadow-md md:shadow-none py-4 md:py-0 z-10 transition-transform duration-300 ease-in-out`}
      >
        <ul className="flex flex-col md:flex-row items-center gap-4">
          <li className="flex h-10 px-3 py-2 justify-center items-center gap-1.5">
            <a
              href="#skills"
              className="text-[#FFFFFF] hover:text-[#7127BA] text-xl md:text-2xl font-medium leading-[20px] pr-0 md:pr-20"
            >
              Skills
            </a>
          </li>
          <li className="flex h-10 px-3 py-2 justify-center items-center gap-1.5 rounded-md">
            <a
              href="#ConnectWithMe"
              className="text-[#FFFFFF] hover:text-[#7127BA] text-xl md:text-2xl font-medium leading-[20px] pr-0 md:pr-20"
            >
              Contact Me
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
