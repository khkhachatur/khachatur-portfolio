import { Box, Typography, Chip, Button } from "@mui/material";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Art Factory — Web Application",
    image: "/portfolio/projects/crm.png",
    tags: [
      "React",
      "Material UI",
      "Figma",
      "Redux",
      "GitHub",
      "Axios",
      "Admin Panel",
    ],
    description:
      "Built a responsive gallery website featuring: Admin panel with full CRUD functionality (add, edit, delete artworks & products) Advanced filtering system for categories, artists, and price ranges Clean, modern UI inspired by best UX practices.",
    github: "https://github.com/khkhachatur/art_factory.git",
  },
  {
    title: "Calculation Tool",
    image: "/portfolio/projects/calculator.png",
    tags: ["React", "Custom Hooks"],
    description:
      "Interactive tool with real-time calculations and filters. Users can adjust parameters to instantly see results.",
  },
];

export default function ProjectsSection() {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 6, p: 4 }}>
      {projects.map((project, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
          whileHover={{ y: -10, boxShadow: "0px 10px 20px rgba(0,0,0,0.3)" }}
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "20px",
            position: "relative",
            maxWidth: "900px",
            borderRadius: "20px",
            zIndex: projects.length - index,
            transform: `translateY(${index * -30}px)`, // creates stacking effect
          }}
        >
          {/* LEFT IMAGE */}
          <Box
            sx={{
              flex: "1 1 40%",
              backgroundImage: `url(${project.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              minHeight: "250px",
            }}
          />

          {/* RIGHT CONTENT */}
          <Box
            sx={{
              flex: "1 1 60%",
              p: 3,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Typography
              variant="h5"
              fontWeight="bold"
              color="#fff"
              gutterBottom
            >
              {project.title}
            </Typography>
            <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap", mb: 2 }}>
              {project.tags.map((tag, j) => (
                <Chip
                  key={j}
                  label={tag}
                  size="small"
                  sx={{
                    backgroundColor: "rgba(140,60,71,0.8)",
                    color: "#fff",
                    fontWeight: "500",
                  }}
                />
              ))}
            </Box>
            <Typography variant="body1" color="#fff" mb={2}>
              {project.description}
            </Typography>
            <Box sx={{ display: "flex", gap: 2 }}>
              {project.liveLink && (
                <Button
                  variant="contained"
                  href={project.liveLink}
                  target="_blank"
                  sx={{
                    borderRadius: "20px",
                    color: "#fff",
                    borderColor: "#fff",
                  }}
                >
                  Live Demo
                </Button>
              )}
              {project.github && (
                <Button
                  variant="outlined"
                  href={project.github}
                  target="_blank"
                  sx={{
                    borderRadius: "20px",
                    color: "#fff",
                    borderColor: "#fff",
                  }}
                >
                  GitHub
                </Button>
              )}
            </Box>
          </Box>
        </motion.div>
      ))}
    </Box>
  );
}
