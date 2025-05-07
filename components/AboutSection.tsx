import { forwardRef } from "react";
import { motion } from "framer-motion";

const AboutSection = forwardRef<HTMLElement>((props, ref) => {
  return (
    <section
      ref={ref}
      className='min-h-screen flex items-center justify-center snap-start py-20 bg-white dark:bg-neutral-950'
    >
      <div className='container mx-auto px-6 md:px-12 lg:px-20'>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className='text-center max-w-4xl mx-auto'
        >
          <h2 className='text-5xl font-bold mb-6 text-center text-neutral-900 dark:text-white drop-shadow-lg'>
            About me
          </h2>

          <p className='text-lg md:text-xl text-neutral-700 dark:text-neutral-300 leading-relaxed mb-4 drop-shadow'>
            I'm a full stack developer with 10+ years of experience building secure, scalable applications across web,
            mobile, blockchain, and AI/ML — though in recent years, I've focused on delivering world-class web apps.
          </p>

          <p className='text-lg md:text-xl text-neutral-700 dark:text-neutral-300 leading-relaxed mb-4 drop-shadow'>
            I work with <strong>React, TypeScript, Node.js, Python, .NET, PostgreSQL, SQL Server, and MongoDB</strong>.
            I’ve built platforms for government, analytics, and e-commerce — including one that cut load time by 73% and
            integrated <strong>AWS Cognito</strong> security.
          </p>

          <p className='text-lg md:text-xl text-neutral-700 dark:text-neutral-300 leading-relaxed mb-4 drop-shadow'>
            As a bilingual engineer (🇩🇴🇺🇸), I bridge technical and non-technical teams with clear communication.
          </p>

          <p className='text-lg md:text-xl text-neutral-700 dark:text-neutral-300 leading-relaxed mb-6 drop-shadow'>
            Outside of work, you’ll find me exploring tech trends, teaching others, playing violin, or beating a level
            on my Nintendo Switch.
          </p>
          <p className='text-sm text-neutral-500 dark:text-neutral-300 mb-2 drop-shadow'>
            Choose your preferred version:
          </p>

          <div className='flex flex-col sm:flex-row justify-center gap-4 mt-6'>
            <a
              href='./Julio_Lizardo_Resume_Full.pdf'
              download
              className='inline-block px-5 py-2 text-base font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 transition drop-shadow'
            >
              📄 Download Full Resume
            </a>
            <a
              href='./Julio_Lizardo_Resume_Short.pdf'
              download
              className='inline-block px-5 py-2 text-base font-medium text-blue-600 border border-blue-600 rounded-md hover:bg-blue-100 transition dark:hover:bg-blue-900 drop-shadow'
            >
              ✂️ Download Short Version
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
});

AboutSection.displayName = "AboutSection";
export default AboutSection;
