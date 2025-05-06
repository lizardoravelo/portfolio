import { forwardRef } from "react";
import { motion } from "framer-motion";

type ProjectCardProps = {
  key: string;
  title: string;
  description: string;
  link: string;
};

const ProjectCard = ({ title, description, link }: ProjectCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className='bg-white/90 dark:bg-neutral-800/90 backdrop-blur-md p-6 rounded-lg shadow-lg'
  >
    <h3 className='text-xl font-semibold mb-2 text-neutral-900 dark:text-white'>{title}</h3>
    <p className='text-neutral-700 dark:text-neutral-300 mb-4'>{description}</p>
    <a
      href={link}
      target='_blank'
      rel='noopener noreferrer'
      className='text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300'
    >
      View Project →
    </a>
  </motion.div>
);

const ProjectsSection = forwardRef<HTMLElement>((props, ref) => {
  const projects: ProjectCardProps[] = [
    // {
    //   title: "E-commerce Platform",
    //   description: "A full-stack e-commerce solution with React and Node.js, prepare with Stripe and Blockchain integration",
    //   link: "#",
    // },
    // {
    //   title: "Web Chat Room",
    //   description: "Real-time Chat room with WebSocket and Rest API, made with React.js, Node.js, Express and Socket.io",
    //   link: "#",
    // },
    // {
    //   title: "UML Drag and Drop Generator",
    //   description: "App to create UML Diagram using Drag and Drop",
    //   link: "#",
    // },
    // {
    //   title: "Others...",
    //   description: "App to create UML Diagram using Drag and Drop",
    //   link: "#",
    // },
  ];

  return (
    <section ref={ref} className='min-h-screen flex items-center justify-center snap-start py-20'>
      <div className='container mx-auto px-4'>
        <h2 className='text-4xl font-bold mb-12 text-center text-neutral-900 dark:text-white drop-shadow-lg'>
          Projects
        </h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {projects.length > 0 ? (
            projects.map((project) => (
              <ProjectCard {...project} />
            ))
          ) : (
            <p className="text-center col-span-full text-neutral-500 dark:text-neutral-400">
              No projects available yet.
            </p>
          )}
        </div>
      </div>
    </section>
  );
});

ProjectsSection.displayName = "ProjectsSection";
export default ProjectsSection;
