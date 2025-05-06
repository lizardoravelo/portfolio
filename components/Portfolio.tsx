"use client";

import { useState, useRef, useEffect } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { Github, Linkedin, Moon, Sun } from "lucide-react";
import BackgroundPaths from "./background-paths";
import ProjectsSection from "./ProjectsSection";
import CareerSection from "./CareerSection";
import TechStackSection from "./TechStackSection";
import ContactSection from "./ContactSection";
import AboutSection from "./AboutSection";
import { siteConfig } from "@/lib/siteConfig";
import { useTheme } from "next-themes";

interface MenuOptionProps {
  name: string;
  key: string;
}

const menuOptions: MenuOptionProps[] = [
  { name: "Intro", key: "intro" },
  { name: "About", key: "about" },
  { name: "Projects", key: "projects" },
  { name: "Career", key: "career" },
  { name: "Tech Stack", key: "tech-stack" },
  { name: "Contact", key: "contact" },
];

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("intro");
  const [mobileOpen, setMobileOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ container: containerRef });
  const { theme, setTheme } = useTheme();

  const sectionRefs = {
    intro: useRef<HTMLDivElement>(null),
    about: useRef<HTMLDivElement>(null),
    projects: useRef<HTMLDivElement>(null),
    career: useRef<HTMLDivElement>(null),
    "tech-stack": useRef<HTMLDivElement>(null),
    contact: useRef<HTMLDivElement>(null),
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = containerRef.current?.scrollTop || 0;
      const windowHeight = window.innerHeight;

      for (const [section, ref] of Object.entries(sectionRefs)) {
        if (ref.current) {
          const { offsetTop, offsetHeight } = ref.current;
          if (
            scrollPosition >= offsetTop - windowHeight / 2 &&
            scrollPosition < offsetTop + offsetHeight - windowHeight / 2
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    containerRef.current?.addEventListener("scroll", handleScroll);
    return () => containerRef.current?.removeEventListener("scroll", handleScroll);
  }, [sectionRefs]);

  const scrollTo = (section: string) => {
    sectionRefs[section as keyof typeof sectionRefs].current?.scrollIntoView({
      behavior: "smooth",
    });
    setMobileOpen(false); // close menu on mobile
  };

  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  return (
    <div className='h-screen overflow-hidden bg-white dark:bg-neutral-950'>
      <BackgroundPaths />
      <div ref={containerRef} className='h-full overflow-y-auto snap-y snap-mandatory scroll-smooth'>
        {/* NAVIGATION */}
        <nav className='fixed top-0 left-0 right-0 z-50 flex justify-between items-center p-4 bg-white/80 dark:bg-neutral-950/80 backdrop-blur-sm'>
          {/* Social Links */}
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

          {/* Mobile menu button */}
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

          {/* Theme toggle (desktop only) */}
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className='hidden md:block p-2 rounded-md bg-neutral-200 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors'
          >
            {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
            <span className='sr-only'>Toggle theme</span>
          </button>
        </nav>

        {/* Mobile menu */}
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
                    onClick={() => scrollTo(item.key)}
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

        {/* SECTIONS */}
        <section ref={sectionRefs.intro} className='h-screen flex flex-col items-center justify-center snap-start'>
          <motion.div style={{ opacity }} className='text-center max-w-3xl px-6'>
            <h1 className='text-6xl font-bold mb-4 text-center text-neutral-900 dark:text-white drop-shadow-lg'>
              Hey there 👋 I'm Julio
            </h1>
            <p className='text-xl text-center text-neutral-800 dark:text-neutral-200 max-w-2xl mx-auto mb-8 drop-shadow'>
              A full stack developer turning business challenges into beautiful, performant code across the stack.
            </p>
            <p className='text-lg text-center text-neutral-800 dark:text-neutral-200 max-w-xl mx-auto mb-8 drop-shadow'>
              From intuitive frontends to robust backends, I build solutions that scale and delight. Scroll down to
              explore my work and let’s connect!
            </p>
            <a
              onClick={() => scrollTo("contact")}
              className='inline-block mt-6 px-6 py-3 rounded-lg font-semibold text-white bg-gradient-to-r from-blue-500 to-indigo-600 shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 drop-shadow cursor-pointer'
            >
              🚀 Let’s Work Together
            </a>
          </motion.div>
        </section>

        <AboutSection ref={sectionRefs.about} />
        <ProjectsSection ref={sectionRefs.projects} />
        <CareerSection ref={sectionRefs.career} />
        <TechStackSection ref={sectionRefs["tech-stack"]} />
        <ContactSection ref={sectionRefs.contact} />
      </div>
    </div>
  );
}
