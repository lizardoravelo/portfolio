import { memo } from "react";
import { LazyMotion, domAnimation, m } from "framer-motion";

export type CareerItemProps = {
  year: string;
  title: string;
  company: {
    name: string;
    url: string;
  };
  summary: string;
  technologies: string[];
  isLast: boolean;
};

const CareerItem = memo(({ year, title, company, summary, technologies, isLast }: CareerItemProps) => (
  <LazyMotion features={domAnimation}>
    <m.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className='mb-16 bg-white/90 dark:bg-neutral-800/90 backdrop-blur-md p-6 rounded-lg shadow-lg relative'
    >
      <div className='flex justify-between items-center mb-2'>
        <a
          href={company.url}
          target='_blank'
          rel='noopener noreferrer'
          className='text-lg font-semibold text-blue-600 dark:text-blue-400 hover:underline'
        >
          {company.name}
        </a>
        <div className='text-sm text-neutral-500 dark:text-neutral-400'>{year}</div>
      </div>
      <h3 className='text-xl font-semibold mb-2 text-neutral-900 dark:text-white'>{title}</h3>
      <p className='text-neutral-600 dark:text-neutral-400 mb-3'>{summary}</p>
      <div className='flex flex-wrap gap-2 mt-4'>
        {technologies.map((tech, index) => (
          <span
            key={index}
            className='px-3 py-1 text-sm rounded-full bg-neutral-200 dark:bg-neutral-700 text-neutral-800 dark:text-white'
          >
            {tech}
          </span>
        ))}
      </div>
      {!isLast && (
        <div
          className='absolute left-1/2 top-full w-1 h-16 bg-black dark:bg-white'
          style={{ transform: "translateX(-50%)" }}
        ></div>
      )}
      <div
        className='absolute left-1/2 top-0 w-4 h-4 bg-black dark:bg-white rounded-full'
        style={{ transform: "translate(-50%, -50%)" }}
      ></div>
    </m.div>
  </LazyMotion>
));
CareerItem.displayName = "CareerItem";

export default CareerItem;
