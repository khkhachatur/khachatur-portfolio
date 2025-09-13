import { useState } from "react";
import { Typography, Button } from "@mui/material";
import { motion } from "framer-motion";
import {
  Container,
  TopSection,
  InteractiveSection,
  IconSection,
} from "./appStyles.js";

import Title from "./Components/Title.jsx";
import PulseDot from "./Components/PulseDot.jsx";
import IconButton from "./Components/IconButton.jsx";
import SkillsSection from "./Components/SkillsSection.jsx";
import WorkExperience from "./Components/WorkExperience.jsx";
import ProjectsSection from "./Components/ProjectsSection.jsx";

<style>
  @import
  url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100..900;1,100..900&display=swap');
</style>;

const text = "PORTFOLIO".split("");

function App() {
  const [animatePortfolio, setAnimatePortfolio] = useState(false);

  const handleShake = () => {
    setAnimatePortfolio(true);
    setTimeout(() => setAnimatePortfolio(false), 1000);
  };

  return (
    <Container>
      <TopSection>
        <Typography
          color="#fff"
          variant="h2"
          marginBottom="0"
          fontWeight="500"
          gutterBottom
          marginTop="200px"
        >
          HI I'M <span style={{ color: "#69141F" }}>KHACHATUR</span>
        </Typography>

        <Typography color="#fff" fontWeight="300" variant="h6" maxWidth="500px">
          A fast-learning GIS Specialist & IT Developer, ready to take on new
          challenges and improve in the areas where I’ve already made an impact.
        </Typography>

        <InteractiveSection>
          <motion.button
            style={{
              backgroundColor: "#fff",
              color: "#69141F",
              borderRadius: "50px",
              padding: "10px 20px",
              fontSize: "0.9rem",
              border: "none",
              fontWeight: "500",
              cursor: "pointer",
              boxShadow: "0px 4px 8px rgba(0,0,0,0.2)",
              transition: "all 0.6s ease-in-out",
            }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 6px 12px rgba(105, 20, 31, 0.4)",
            }}
            whileTap={{
              scale: 0.95,
            }}
            onMouseOver={(e) => (e.currentTarget.style.opacity = 1)}
            onMouseOut={(e) => (e.currentTarget.style.opacity = 0.8)}
            onClick={handleShake}
          >
            push me
          </motion.button>

          <IconSection>
            <IconButton
              link="https://github.com/khkhachatur"
              icon="/portfolio/iocns/github.png"
            />
            <IconButton
              link="https://www.instagram.com/khcho_k/"
              icon="/portfolio/iocns/instagram.png"
            />
            <IconButton
              link="https://web.telegram.org/#@kkkk_kkkk_kkkk_k"
              icon="/portfolio/iocns/telegram.png"
            />
          </IconSection>
        </InteractiveSection>

        <Typography
          variant="h1"
          sx={{
            fontWeight: "bold",
            lineHeight: "0.8",
            fontSize: "13.2em",
            textTransform: "uppercase",
            display: "flex",
            justifyContent: "center",
            marginTop: "0",
            padding: "15px 0 0 0",
          }}
        >
          {text.map((letter, i) => {
            const randomY = Math.random() * 40 - 20;
            const randomRotate = Math.random() * 60 - 30;
            const randomScale = 1 + Math.random() * 0.5;

            return (
              <motion.span
                key={i}
                animate={
                  animatePortfolio
                    ? {
                        y: [0, randomY, 0],
                        rotate: [0, randomRotate, 0],
                        scale: [1, randomScale, 1],
                        color: ["#69141F", "#ffffff", "#69141F"],
                        textShadow: [
                          "0px 0px 0px rgba(255,255,255,0)",
                          "0px 0px 10px rgba(255,255,255,0.8)",
                          "0px 0px 0px rgba(255,255,255,0)",
                        ],
                      }
                    : { color: "#69141F", textShadow: "none" }
                }
                transition={{
                  duration: 0.7,
                  ease: "easeOut",
                  delay: i * 0.05,
                }}
                style={{ display: "inline-block" }}
              >
                {letter}
              </motion.span>
            );
          })}
        </Typography>
      </TopSection>
      <Typography
        color="#fff"
        fontWeight="300"
        variant="h5"
        maxWidth="800px"
        margin="80px 0 40px 0"
        textAlign="center"
      >
        Hi, I’m Khachatur, a results-driven GIS specialist and frontend
        developer with experience in geospatial data, web applications, and team
        coordination. I love solving complex problems, whether it’s optimizing
        data workflows or building intuitive user interfaces. Skilled at
        learning fast, improving processes, and collaborating with diverse,
        remote teams to deliver real results.
      </Typography>

      <Typography
        color="#fff"
        fontWeight="200"
        variant="h6"
        textAlign="center"
        margin="20px 0 20px 0"
      >
        Let's explore My path together
      </Typography>
      <PulseDot
        icon="/portfolio/icons/f1car.png"
        onClick={() => console.log("Dot clicked! Soon we animate scroll 🚀")}
      />
      <Title sectionName="Work Experience" />
      <>
        <WorkExperience />
      </>
      <Title sectionName="Projects" />
      <>
        <ProjectsSection />
      </>
      <Title sectionName="Skills & Languages" />
      <SkillsSection />
      <Title sectionName="Education" />
      <Title sectionName="Contact Information" />
    </Container>
  );
}

export default App;
