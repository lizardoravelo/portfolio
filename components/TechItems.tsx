import { LazyMotion, domAnimation, m } from "framer-motion";
import React from "react";

export const TechItem = React.memo(({ name, icon }: { name: string; icon: JSX.Element }) => (
  <LazyMotion features={domAnimation}>
    <m.div
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className='flex flex-col items-center p-4 bg-white/90 dark:bg-neutral-800/90 backdrop-blur-md rounded-xl shadow-md hover:scale-105 hover:shadow-xl transition-transform duration-300'
    >
      <div title={name} aria-label={`Technology: ${name}`} className='text-4xl mb-2'>
        {icon}
      </div>
      <div className='text-sm font-medium text-center text-neutral-900 dark:text-white'>{name}</div>
    </m.div>
  </LazyMotion>
));
