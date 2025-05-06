import { forwardRef, ReactElement } from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import { siteConfig } from "@/lib/siteConfig";

type ContactLink = {
  key: string;
  label: string;
  sub: string;
  icon: ReactElement;
  href: string;
};

const contactLinks: ContactLink[] = [
  {
    key: '1op',
    label: "Let's Connect",
    sub: "on LinkedIn",
    icon: <FaLinkedin className='text-blue-600 text-xl' />,
    href: siteConfig.linkedIn,
  },
  {
    key: '2op',
    label: "GitHub",
    sub: "@lizardoravelo",
    icon: <FaGithub className='text-white text-xl' />,
    href: siteConfig.github,
  },
  {
    key: '3op',
    label: "Email Me",
    sub: siteConfig.email,
    icon: <FaEnvelope className='text-red-500 text-xl' />,
    href: `mailto:${siteConfig.email}`,
  },
];

const ContactSection = forwardRef<HTMLElement>((_, ref) => {
  return (
    <section ref={ref} className='min-h-screen flex items-center justify-center snap-start py-20'>
      <div className='container mx-auto px-4'>
        <h2 className='text-4xl font-bold mb-12 text-center text-neutral-900 dark:text-white drop-shadow-lg'>
          Connect With Me
        </h2>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className='max-w-md mx-auto bg-white/90 dark:bg-neutral-800/90 backdrop-blur-md p-6 rounded-2xl shadow-lg space-y-4'
        >
          {contactLinks.map((link) => (
            <a
              key={link.key}
              href={link.href}
              target='_blank'
              rel='noopener noreferrer'
              className='flex items-center gap-4 p-4 rounded-lg hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors'
            >
              <div className='p-2 rounded-full bg-neutral-100 dark:bg-neutral-700'>{link.icon}</div>
              <div>
                <div className='font-semibold text-neutral-900 dark:text-white'>{link.label}</div>
                <div className='text-sm text-neutral-500 dark:text-neutral-400'>{link.sub}</div>
              </div>
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
});

ContactSection.displayName = "ContactSection";
export default ContactSection;
