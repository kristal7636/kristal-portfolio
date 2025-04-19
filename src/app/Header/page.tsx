"use client";
import React, { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = useCallback(() => {
    setMenuOpen((prev) => !prev);
  }, []);

  const closeMenu = useCallback(() => {
    setMenuOpen(false);
  }, []);

  const menuVariants = {
    open: {
      opacity: 1,
      y: 0,
      scaleY: 1,
      transition: {
        type: "spring",
        bounce: 0.55,
        duration: 1.3,
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
    closed: {
      opacity: 0,
      y: -20,
      scaleY: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  const itemVariants = {
    open: { opacity: 1, y: 0 },
    closed: { opacity: 0, y: -10 },
  };

  const menuItems = ["Skills", "Works", "Contact Me"] as const;
  type MenuItem = typeof menuItems[number];

  const hrefMap: Record<MenuItem, string> = {
    Skills: "#skills",
    Works: "#projects",
    "Contact Me": "#form",
  };

  return (
    <header className="flex items-center justify-between p-2 flex-wrap bg-gradient-to-r from-[#1a0b2e] to-[#560ba1] shadow-lg fixed top-0 left-0 w-full z-50">
      {/* Logo */}
      <div className="cursor-pointer flex items-center z-50">
        <img
          src="./VS.svg"
          alt="Logo"
          className="w-14 h-14 rounded-full ml-4 sm:ml-28 sm:mr-16"
        />
        <span className="text-xl md:text-4xl text-white font-semibold">
          <a href="#hero">VARUN</a>
        </span>
      </div>

      {/* Hamburger Menu Button */}
      <div className="md:hidden p-4 z-50" onClick={toggleMenu}>
        <motion.div
          initial={false}
          animate={menuOpen ? "open" : "closed"}
          className="space-y-1 cursor-pointer"
        >
          <motion.span
            variants={{
              open: { rotate: 45, y: 6 },
              closed: { rotate: 0, y: 0 },
            }}
            transition={{ duration: 0.3 }}
            className="block w-6 h-0.5 bg-white"
          />
          <motion.span
            variants={{
              open: { opacity: 0 },
              closed: { opacity: 1 },
            }}
            transition={{ duration: 0.2 }}
            className="block w-6 h-0.5 bg-white"
          />
          <motion.span
            variants={{
              open: { rotate: -45, y: -6 },
              closed: { rotate: 0, y: 0 },
            }}
            transition={{ duration: 0.3 }}
            className="block w-6 h-0.5 bg-white"
          />
        </motion.div>
      </div>

      {/* Navigation Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="md:flex flex-col md:flex-row items-center gap-4 absolute md:static top-[64px] left-0 w-full md:w-auto bg-gradient-to-r from-[#1a0b2e] to-[#560ba1] md:bg-transparent shadow-md md:shadow-none py-4 md:py-0 z-40 origin-top"
          >
            <motion.ul className="flex flex-col md:flex-row items-center gap-4">
              {menuItems.map((text) => (
                <motion.li
                  key={text}
                  variants={itemVariants}
                  className="flex h-10 px-3 py-2 justify-center items-center"
                >
                  <a
                    href={hrefMap[text]}
                    onClick={closeMenu}
                    className="text-white hover:text-[#7127BA] text-xl md:text-2xl font-medium leading-[20px] pr-0 md:pr-20 transition-colors duration-300"
                  >
                    {text}
                  </a>
                </motion.li>
              ))}
            </motion.ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
