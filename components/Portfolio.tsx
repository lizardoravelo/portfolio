"use client";

import { useTransform, useScroll, motion } from "framer-motion";
import { useRef } from "react";
import BackgroundPaths from "./background-paths";
import ProjectsSection from "./ProjectsSection";
import CareerSection from "./CareerSection";
import TechStackSection from "./TechStackSection";
import ContactSection from "./ContactSection";
import AboutSection from "./AboutSection";
import Navbar from "./Navbar";
import { useSectionRefs } from "@/hooks/useSectionRefs";

export default function Portfolio() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ container: containerRef });
  const { sectionRefs, activeSection, scrollTo } = useSectionRefs(containerRef);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  const handleScrollToContact = () =>{
    scrollTo("contact")
  }

  return (
    <div className='h-screen overflow-hidden bg-white dark:bg-neutral-950'>
      <BackgroundPaths />

      <div ref={containerRef} className='h-full overflow-y-auto snap-y snap-mandatory scroll-smooth'>
        <Navbar activeSection={activeSection} scrollTo={scrollTo} />

        {/* Intro Section */}
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
              onClick={handleScrollToContact}
              className='inline-block mt-6 px-6 py-3 rounded-lg font-semibold text-white bg-gradient-to-r from-blue-500 to-indigo-600 shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 drop-shadow cursor-pointer'
            >
              🚀 Let’s Work Together
            </a>
          </motion.div>
        </section>

        {/* Other Sections */}
        <AboutSection ref={sectionRefs.about} />
        <ProjectsSection ref={sectionRefs.projects} />
        <CareerSection ref={sectionRefs.career} />
        <TechStackSection ref={sectionRefs["tech-stack"]} />
        <ContactSection ref={sectionRefs.contact} />
      </div>
    </div>
  );
}
