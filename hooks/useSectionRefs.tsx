import { useEffect, useRef, useState, RefObject } from "react";
import { SectionKey } from "@/types/sections";


export const useSectionRefs = (containerRef: RefObject<HTMLDivElement>) => {
  const [activeSection, setActiveSection] = useState<SectionKey>("intro");

  const sectionRefs: Record<SectionKey, RefObject<HTMLDivElement>> = {
    intro: useRef(null),
    about: useRef(null),
    projects: useRef(null),
    career: useRef(null),
    "tech-stack": useRef(null),
    contact: useRef(null),
  };

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const scrollPosition = container.scrollTop;
      const windowHeight = window.innerHeight;

      for (const section of Object.keys(sectionRefs) as SectionKey[]) {
        const ref = sectionRefs[section];
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

    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, [containerRef]);

  const scrollTo = (section: SectionKey) => {
    sectionRefs[section].current?.scrollIntoView({ behavior: "smooth" });
  };

  return { sectionRefs, activeSection, scrollTo };
};
