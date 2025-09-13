import { motion } from "framer-motion";
import { Typography } from "@mui/material";

const skills = {
  "Frontend Development": [
    "React",
    "Material UI",
    "JavaScript",
    "HTML5",
    "CSS",
    "Redux",
  ],
  "Backend & APIs": ["Node.js", "Express.js", "Axios", "REST API"],
  "GIS & Data": ["ArcGIS 10.8", "ArcGIS Pro", "Global Mapper", "QGIS"],
  "Tools & Platforms": [
    "GitHub",
    "Figma",
    "Postman",
    "VS Code",
    "Photoshop",
    "Adobe Illustrator",
  ],
  "Soft Skills": [
    "Team Collaboration",
    "Problem Solving",
    "Fast Learner",
    "Adaptability",
  ],
  Languages: [
    "English (Upper-Intermediate)",
    "Portuguese (Intermediate)",
    "Russian (Fluent)",
    "Armenian (Native)",
  ],
};

const containerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

export default function SkillsSection() {
  // Split categories into left/right groups
  const leftCategories = Object.entries(skills).slice(
    0,
    Math.ceil(Object.keys(skills).length / 2)
  );
  const rightCategories = Object.entries(skills).slice(
    Math.ceil(Object.keys(skills).length / 2)
  );

  return (
    <section
      style={{
        display: "flex",
        justifyContent: "center",
        gap: "200px",
        padding: "60px 40px",
      }}
    >
      {/* Left column */}
      <div style={{ display: "flex", flexDirection: "column", gap: "50px" }}>
        {leftCategories.map(([category, items]) => (
          <SkillGroup key={category} category={category} items={items} />
        ))}
      </div>

      {/* Right column */}
      <div style={{ display: "flex", flexDirection: "column", gap: "50px" }}>
        {rightCategories.map(([category, items]) => (
          <SkillGroup key={category} category={category} items={items} />
        ))}
      </div>
    </section>
  );
}

function SkillGroup({ category, items }) {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <Typography
        variant="h5"
        sx={{ color: "#fff", marginBottom: "20px", fontWeight: "600" }}
      >
        {category}
      </Typography>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "12px",
          maxWidth: "300px",
        }}
      >
        {items.map((skill) => (
          <motion.span
            key={skill}
            variants={itemVariants}
            style={{
              background: "rgba(255, 255, 255, 0.1)",
              border: "1px solid rgba(255, 255, 255, 0.3)",
              borderRadius: "20px",
              padding: "8px 16px",
              color: "#fff",
              fontSize: "0.9rem",
              backdropFilter: "blur(6px)",
              boxShadow: "0px 2px 6px rgba(0,0,0,0.2)",
              cursor: "default",
              transition: "all 0.3s ease-in-out",
            }}
            whileHover={{
              scale: 1.05,
              background: "rgba(255, 255, 255, 0.2)",
              boxShadow: "0px 4px 12px rgba(0,0,0,0.3)",
            }}
          >
            {skill}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
}
