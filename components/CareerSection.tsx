import { forwardRef } from "react";
import CareerItem from "@/components/CareerItem";
import { CareerItemProps } from "@/components/CareerItem";

const CareerSection = forwardRef<HTMLElement>((props, ref) => {
  const careerPath: Omit<CareerItemProps, "isLast">[] = [
    {
      key: '1n',
      year: "Jun 2023 - May 2024",
      title: "Senior Software Engineer",
      company: {
        name: "Axiom Cloud",
        url: "https://www.axiomcloud.ai",
      },
      summary:
        "Engineered and optimized full-stack systems for energy intelligence software with a focus on performance, scalability, and security.",
      technologies: [
        "React",
        "TypeScript",
        "Redux Toolkit",
        "GraphQL",
        "Python",
        "AWS",
        "Amplitude",
        "REST API",
        "Tailwind",
        "Frammer Motion",
      ],
    },
    {
      key: '2n',
      year: "Dec 2021 - Jun 2023",
      title: "Senior Software Engineer",
      company: {
        name: "BairesDev",
        url: "https://www.bairesdev.com",
      },
      summary:
        "Developed modern application interfaces and backend integrations focused on performance, scalability, and accessibility.",
      technologies: [
        "React",
        "GraphQL",
        "Apollo",
        "Python",
        "Material UI",
        "Highcharts",
        "AWS",
        "Tailwind",
        "Frammer Motion",
      ],
    },
    {
      key: '3k',
      year: "Apr 2020 - Dec 2021",
      title: "Lead Developer",
      company: {
        name: "Ministerio de Educación (MINERD)",
        url: "https://www.minerd.gob.do",
      },
      summary:
        "Developed and led digital solutions to modernize public sector workflows and internal operations using .NET and React technologies.",
      technologies: [".NET Core", "React.js", "MS SQL Server", "TFS", "Material UI", "Azure", "Bootstrap"],
    },
    {
      key: '4l',
      year: "Apr 2019 - Apr 2020",
      title: "Software Developer I",
      company: {
        name: "Junta Central Electoral (JCE)",
        url: "https://jce.gob.do",
      },
      summary:
        "Designed and implemented scalable software and database solutions to improve interoperability and data efficiency.",
      technologies: [".NET Core", "React.js", "MS SQL Server", "T-SQL", ".Net", "R", "Azure", "Bootstrap"],
    },
    {
      key: '5g',
      year: "Apr 2018 - Apr 2019",
      title: "Database Administrator",
      company: {
        name: "PROMESE/CAL",
        url: "https://www.promesecal.gob.do",
      },
      summary:
        "Managed and optimized enterprise databases, BI reporting, and backend systems to drive analytics and system efficiency.",
      technologies: ["SQL Server", "SSIS", "SSAS", "Tableau", ".NET", "Dynamics GP", "R", "Bootstrap"],
    },
    {
      key: '6u',
      year: "Sep 2014 - Apr 2018",
      title: "Senior Developer",
      company: {
        name: "PROMESE/CAL",
        url: "https://www.promesecal.gob.do",
      },
      summary:
        "Led backend architecture and systems integration for inventory, public procurement, and order management.",
      technologies: [".NET", "jQuery", "SQL Server", "SSIS", "SSAS", "Dynamics GP", "Bootstrap"],
    },
    {
      key: '7e',
      year: "Feb 2014 - Aug 2014",
      title: "Junior Developer",
      company: {
        name: "PROMESE/CAL",
        url: "https://www.promesecal.gob.do",
      },
      summary: "Supported software audits, backend development, and device management systems for internal operations.",
      technologies: [".NET", "JavaScript", "jQuery", "MS SQL Server", "Bootstrap"],
    },
    {
      key: '8q',
      year: "Jan 2013 - Jan 2014",
      title: "Developer",
      company: {
        name: "Universidad Central del Este - UCE",
        url: "https://www.uce.edu.do",
      },
      summary: "Developed academic tools and reporting systems to support institutional needs and student management.",
      technologies: [".NET", "JavaScript", "jQuery", "SOAP", "REST", "MS SQL Server", "Bootstrap"],
    },
  ];

  return (
    <section ref={ref} className='min-h-screen flex items-center justify-center snap-start py-20'>
      <div className='container mx-auto px-4'>
        <h2 className='text-4xl font-bold mb-16 text-center text-neutral-900 dark:text-white drop-shadow-lg'>
          Career Path
        </h2>
        <div className='max-w-3xl mx-auto relative'>
          {careerPath.map((item, index) => (
            <CareerItem {...item} isLast={index === careerPath.length - 1} />
          ))}
        </div>
      </div>
    </section>
  );
});

CareerSection.displayName = "CareerSection";
export default CareerSection;
