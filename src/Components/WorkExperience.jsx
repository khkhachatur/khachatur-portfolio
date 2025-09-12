import { useState } from "react";
import { motion } from "framer-motion";
import WorkExperienceCard from "./WorkExperienceCard.jsx";

const workExperiences = [
  {
    background: "/portfolio/images/GISMANAGER.jpg",
    title: "Project Lead — MDVIA Angola",
    date: "2023–Present",
    description:
      "I serve as the primary liaison between clients and the development team, translating business requirements into actionable tasks and ensuring deliverables align with expectations. By coordinating workflows, assigning responsibilities, and resolving blockers, I help keep projects on track and completed on time. My leadership has improved communication across the team, streamlined processes, and reduced project turnaround times.",
    tools: [
      "QGIS",
      "ArcGIS Pro",
      "PostGIS",
      "ArcGIS",
      "Global Mapper",
      "Drone Videography",
      "Areal Photography",
    ],
  },
  {
    background: "/portfolio/images/GISSpec.jpg",
    title: "GIS Specialist & Technical Support - MDVIA Angola ",
    date: "2022–Present",
    description:
      "At MDVIA Angola, I design and maintain geospatial databases that support over 10 field teams. My role includes producing detailed maps, performing spatial analysis, and ensuring smooth operation of GPS and CCTV systems. Through proactive technical support, I’ve contributed to a 20% reduction in downtime across operations.",
    tools: ["QGIS", "PostGIS", "ArcGIS"],
  },
  {
    background: "/portfolio/images/SMMMDVIA.jpg",
    title: "SMM Specialist — MDVIA Angola ",
    date: "2021–Present",
    description:
      "I plan and execute digital marketing strategies to strengthen the company’s brand presence. From creating campaigns to managing social media channels, I focus on building awareness and connecting with target audiences effectively.",
    tools: ["Meta tools", "Photoshop", "etc"],
  },
  {
    background: "/portfolio/images/luxclean.jpg",
    title: "Founder — LUXCLEAN, Yerevan",
    date: "2020–2021",
    description:
      "I launched and managed a local cleaning services company, overseeing daily operations, customer relations, and marketing campaigns. This entrepreneurial experience strengthened my skills in business management, client engagement, and brand development.",
    tools: ["Python", "Google Sheets", "Automation"],
  },
  {
    background: "/portfolio/images/SMMbenjaminmoor.png",
    title: "SMM Specialist - Benjamin Moore Yerevan, Armenia",
    date: "2021–2022",
    description:
      "I managed Benjamin Moore’s social media presence, developing targeted campaigns that significantly boosted online engagement. My work helped shape the company’s digital identity and strengthened its connection with customers.",
    tools: ["Meta tools", "Photoshop", "etc"],
  },
  {
    background: "/portfolio/images/FrontEnd.jpg",
    title: "Frontend Developer | Freelance Projects",
    date: "2022 – Present",
    description:
      "Developed and delivered 5+ websites, including one large-scale full-stack project with authentication, admin panel, API integrations (Axios), and dynamic data management. Built two mid-sized web apps featuring complex filtering systems and calculations, plus three frontend-only projects focusing on responsive design and modern UI/UX best practices.",
    tools: [
      "React",
      "Axios",
      "Node.js (Backend)",
      "MUI / Tailwind",
      "Framer Motion",
      "Git",
    ],
  },
];

export default function WorkExperienceCarousel() {
  const [index, setIndex] = useState(0);

  const nextCard = () =>
    setIndex((prev) => (prev + 1) % workExperiences.length);
  const prevCard = () =>
    setIndex((prev) => (prev === 0 ? workExperiences.length - 1 : prev - 1));

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        margin: "20px 0",
        minHeight: "500px",
      }}
    >
      {workExperiences.map((exp, i) => {
        const offset =
          (i - index + workExperiences.length) % workExperiences.length;

        // Hide all cards except current, next, and previous
        if (offset > 1 && offset < workExperiences.length - 1) return null;

        // Calculate position
        let x = 0;
        let scale = 1;
        let zIndex = 1;
        let opacity = 1;

        if (offset === 0) {
          // Active card
          x = 0;
          scale = 1;
          zIndex = 3;
          opacity = 1;
        } else if (offset === 1) {
          // Next card (right side)
          x = 220;
          scale = 0.85;
          zIndex = 2;
          opacity = 0.7;
        } else {
          // Previous card (left side)
          x = -220;
          scale = 0.85;
          zIndex = 1;
          opacity = 0.7;
        }

        return (
          <motion.div
            key={i}
            style={{
              position: "absolute",
              cursor: "pointer",
            }}
            animate={{ x, scale, opacity, zIndex }}
            transition={{ type: "spring", stiffness: 250, damping: 30 }}
            onClick={nextCard}
          >
            <WorkExperienceCard {...exp} isActive={offset === 0} />
          </motion.div>
        );
      })}
    </div>
  );
}
