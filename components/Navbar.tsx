"use client";

import { Github, Linkedin, Moon, Sun } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useTheme } from "next-themes";
import { useState } from "react";
import { siteConfig } from "@/lib/siteConfig";
import { SectionKey } from "@/types/sections";


interface NavbarProps {
  activeSection: SectionKey;
  scrollTo: (section: SectionKey) => void;
}

const menuOptions: { name: string; key: SectionKey }[] = [
  { name: "Intro", key: "intro" },
  { name: "About", key: "about" },
  { name: "Projects", key: "projects" },
  { name: "Career", key: "career" },
  { name: "Tech Stack", key: "tech-stack" },
  { name: "Contact", key: "contact" },
];

export default function Navbar({ activeSection, scrollTo }: NavbarProps) {
  const { theme, setTheme } = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <nav className='fixed top-0 left-0 right-0 z-50 flex justify-between items-center p-4 bg-white/80 dark:bg-neutral-950/80 backdrop-blur-sm'>
        {/* Social Icons */}
        <div className='flex items-center space-x-4'>
          <a href={siteConfig.github} target='_blank' rel='noopener noreferrer'>
            <Github
              className='text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white transition-colors'
              size={24}
            />
          </a>
          <a href={siteConfig.linkedIn} target='_blank' rel='noopener noreferrer'>
            <Linkedin
              className='text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white transition-colors'
              size={24}
            />
          </a>
        </div>

        {/* Desktop Menu */}
        <ul className='hidden md:flex space-x-4'>
          {menuOptions.map((item) => (
            <li key={item.key}>
              <button
                onClick={() => scrollTo(item.key)}
                className={`px-3 py-2 rounded-md text-sm font-medium ${
                  activeSection === item.key
                    ? "bg-neutral-200 dark:bg-neutral-800 text-neutral-900 dark:text-white"
                    : "text-neutral-600 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-900"
                }`}
              >
                {item.name}
              </button>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <div className='md:hidden flex items-center'>
          <button
            onClick={() => setMobileOpen((prev) => !prev)}
            className='p-2 rounded-md text-neutral-600 dark:text-neutral-400 focus:outline-none'
          >
            <svg className='w-6 h-6' fill='none' stroke='currentColor' strokeWidth='2' viewBox='0 0 24 24'>
              <path strokeLinecap='round' strokeLinejoin='round' d='M4 6h16M4 12h16M4 18h16' />
            </svg>
          </button>
        </div>

        {/* Theme Toggle */}
        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className='hidden md:block p-2 rounded-md bg-neutral-200 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors'
        >
          {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
          <span className='sr-only'>Toggle theme</span>
        </button>
      </nav>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.ul
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className='md:hidden fixed top-16 left-0 right-0 z-40 bg-white dark:bg-neutral-950 px-4 py-2 space-y-2 shadow-lg'
          >
            {menuOptions.map((item) => (
              <li key={item.key}>
                <button
                  onClick={() => {
                    scrollTo(item.key);
                    setMobileOpen(false);
                  }}
                  className={`block w-full text-left px-4 py-2 rounded-md text-sm font-medium ${
                    activeSection === item.key
                      ? "bg-neutral-200 dark:bg-neutral-800 text-neutral-900 dark:text-white"
                      : "text-neutral-600 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-900"
                  }`}
                >
                  {item.name}
                </button>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </>
  );
}
