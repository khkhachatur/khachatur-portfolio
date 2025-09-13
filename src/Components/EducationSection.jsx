import { motion } from "framer-motion";
import { Typography } from "@mui/material";

const education = [
  {
    school: "Moscow State University ",
    degree: "Bachelor’s Higher Mathematics & Computer Science",
    date: "2017–2021",
    details:
      "SDeveloped a strong foundation in advanced mathematics, algorithms, and programming principles. Gained experience with data structures, logic, and problem-solving that later supported my transition into software development and GIS data analysis. Worked on academic projects that required analytical thinking, coding, and data processing.",
  },
  {
    school: "European College in Armenia",
    degree: "Economics",
    date: "2014–2017",
    details:
      "Studied core economic theory, business management, and financial analysis. Built understanding of market structures, decision-making, and optimization, which later helped in designing efficient digital workflows and project planning.",
  },
  {
    school: "Chekhov School",
    degree: "General Education",
    date: "2006–2014",
    details:
      "Completed general education with focus on mathematics and sciences. Developed early interest in technology and logical problem-solving.",
  },
];

export default function EducationSection() {
  return (
    <section
      style={{
        width: "100%",
        maxWidth: "900px",
        margin: "100px auto",
        position: "relative",
      }}
    >
      {/* Education Cards */}
      <div style={{ display: "flex", flexDirection: "column", gap: "120px" }}>
        {education.map((item, index) => (
          <motion.div
            key={index}
            style={{
              background: "rgba(255,255,255,0.1)",
              border: "1px solid rgba(255,255,255,0.3)",
              borderRadius: "20px",
              padding: "20px",
              backdropFilter: "blur(6px)",
              boxShadow: "0px 4px 12px rgba(0,0,0,0.3)",
              maxWidth: "400px",
              alignSelf: index % 2 === 0 ? "flex-start" : "flex-end",
              textAlign: index % 2 === 0 ? "left" : "right",
            }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.3 }}
          >
            <Typography
              variant="h6"
              sx={{ fontWeight: "600", color: "#fff", marginBottom: "8px" }}
            >
              {item.degree}
            </Typography>
            <Typography variant="subtitle2" sx={{ color: "#ddd" }}>
              {item.school}
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: "#bbb", marginBottom: "10px" }}
            >
              {item.date}
            </Typography>
            <Typography variant="body2" sx={{ color: "#fff" }}>
              {item.details}
            </Typography>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
