import dynamic from "next/dynamic";
import { forwardRef } from "react";
import { motion } from "framer-motion";
import {
  SiReact,
  SiNodedotjs,
  SiTypescript,
  SiPython,
  SiPostgresql,
  SiDocker,
  SiAmazon,
  SiGraphql,
  SiNextdotjs,
  SiTailwindcss,
  SiGit,
  SiJest,
  SiApollographql,
  SiBootstrap,
  SiMongodb,
  SiDotnet,
  SiRedux,
  SiTableau,
} from "react-icons/si";
import { TbApi } from "react-icons/tb";
import { VscAzure } from "react-icons/vsc";
import { DiMsqlServer } from "react-icons/di";

const TechItem = dynamic(() => import("./TechItems").then((mod) => mod.TechItem));

const categorizedTechStack = {
  Frontend: [
    { name: "React", icon: <SiReact className='text-[#61dafb]' /> },
    { name: "Redux Toolkit", icon: <SiRedux className='text-[#764abc]' /> },
    { name: "TypeScript", icon: <SiTypescript className='text-[#3178c6]' /> },
    { name: "JavaScript", icon: <SiReact className='text-[#f7df1e]' /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className='text-[#38bdf8]' /> },
    { name: "Bootstrap", icon: <SiBootstrap className='text-[#7952B3]' /> },
    { name: "Next.js", icon: <SiNextdotjs className='text-black dark:text-white' /> },
    { name: "Frammer Motion", icon: <SiReact className='text-[#61dafb]' /> },
  ],
  Backend: [
    { name: "Node.js", icon: <SiNodedotjs className='text-[#339933]' /> },
    { name: "Python", icon: <SiPython className='text-[#3776AB]' /> },
    { name: ".NET", icon: <SiDotnet className='text-[#512bd4]' /> },
    { name: "GraphQL", icon: <SiGraphql className='text-[#e535ab]' /> },
    { name: "Apollo", icon: <SiApollographql className='text-[#311C87]' /> },
    { name: "REST API", icon: <TbApi className='text-[#6b7280]' /> },
  ],
  Database: [
    { name: "MS SQL Server", icon: <DiMsqlServer className='text-[#CC2927]' /> },
    { name: "PostgreSQL", icon: <SiPostgresql className='text-[#336791]' /> },
    { name: "MongoDB", icon: <SiMongodb className='text-[#47A248]' /> },
    { name: "Tableau", icon: <SiTableau className='text-[#E97627]' /> },
  ],
  DevOps: [
    { name: "AWS", icon: <SiAmazon className='text-[#FF9900]' /> },
    { name: "Azure", icon: <VscAzure className='text-[#007FFF]' /> },
    { name: "Docker", icon: <SiDocker className='text-[#2496ed]' /> },
    { name: "Git", icon: <SiGit className='text-[#f05032]' /> },
    { name: "Jest", icon: <SiJest className='text-[#c63d14]' /> },
  ],
};

const TechStackSection = forwardRef<HTMLElement>((_, ref) => {
  return (
    <section ref={ref} className='min-h-screen py-20 snap-start'>
      <div className='container mx-auto px-4'>
        <h2 className='text-4xl font-bold text-center mb-12 text-neutral-900 dark:text-white'>Tech Stack</h2>

        {Object.entries(categorizedTechStack).map(([category, stack], idx) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className='mb-16'
          >
            <h3 className='text-2xl font-semibold mb-4 text-neutral-800 dark:text-white'>{category}</h3>
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6'>
              {stack.map((tech) => (
                <TechItem key={tech.name} {...tech} />
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
});

TechStackSection.displayName = "TechStackSection";
export default TechStackSection;
