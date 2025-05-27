import { forwardRef } from "react";
import { motion } from "framer-motion";

type ProjectCardProps = {
  key: string;
  title: string;
  description: string;
  links: { 
    key: string; 
    label: string; 
    url: string 
  }[];
};

const ProjectCard = ({ title, description, links }: ProjectCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className='bg-white/90 dark:bg-neutral-800/90 backdrop-blur-md p-6 rounded-lg shadow-lg'
  >
    <h3 className='text-xl font-semibold mb-2 text-neutral-900 dark:text-white'>{title}</h3>
    <p className='text-neutral-700 dark:text-neutral-300 mb-4'>{description}</p>
    <div className="flex flex-col gap-2">
      {links.map((link) => (
        <a
          key={link.url}
          href={link.url}
          target='_blank'
          rel='noopener noreferrer'
          className='text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300'
        >
          {link.label} →
        </a>
      ))}
    </div>
  </motion.div>
);

const ProjectsSection = forwardRef<HTMLElement>((props, ref) => {
  const projects: ProjectCardProps[] = [
    {
      title: "Login with Auth0",
      description:
        "Login portal built with React and Auth0. This authentication service provides a JWT required to access protected APIs in other projects like the Web Chat Room with Auth0. Start here to log in and get your token.",
      links: [
        { key: 'auth-project', label: "View Project", url: "https://lizardoravelo.github.io/auth-portal/" }
      ],
      key: "auth-login"
    },
    {
      title: "Web Chat Room (Server) with Auth0",
      description:
        "A scalable real-time chat app server built with REST APIs and WebSockets using Node.js, TypeScript, Express, and Socket.IO. Deployed on Railway, it uses Auth0 for authentication, supports room management, and includes full Swagger documentation. Requires a JWT from the Auth Login project.",
      links: [
        { key: 'chatroom-project', label: "View Swagger Docs", url: "https://chatroom-auth0-production.up.railway.app/api-docs" }
      ],
      key: "chat-room-auth0"
    },
    {
      title: "Web Chat Room (Server) with Plain Auth",
      description:
        "An alternative version of the chat app server using custom authentication without Auth0. Built with Node.js, TypeScript, Express, and Socket.IO. Deployed on Railway with full Swagger documentation and includes its own login flow to generate JWTs — no external login app needed.",
      links: [
        { key: 'chatplain-project', label: "View Swagger Docs", url: "https://chatroom-rest-production.up.railway.app/api-docs/" }
      ],
      key: "chat-room-plain-auth"
    },
    {
      title: "E-Commerce Backend (GraphQL + REST)",
      description:
        "An extensible e-commerce backend built with Express, MongoDB, and TypeScript. It supports both REST and GraphQL APIs with Auth0 authentication, role-based access control using graphql-shield, rate limiting, and secure middleware. Includes full Swagger and GraphiQL documentation.",
      links: [
        { key: 'ecommerce-swagger', label: "View REST Swagger Docs", url: "https://ecommerce-auth0-production.up.railway.app/api-docs" },
        { key: 'ecommerce-graphiql', label: "Open GraphiQL Playground", url: "https://ecommerce-auth0-production.up.railway.app/graphiql" },
        { key: 'ecommerce-graphql', label: "Test GraphQL Endpoint", url: "https://ecommerce-auth0-production.up.railway.app/graphql" }
      ],
      key: "ecommerce-backend"
    }
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
              <ProjectCard {...project} key={project.key} />
            ))
          ) : (
            <p className="text-center col-span-full text-neutral-500 dark:text-neutral-400 drop-shadow">
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
