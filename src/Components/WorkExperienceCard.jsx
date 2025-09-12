import { motion } from "framer-motion";

export default function WorkExperienceCard({
  background,
  title,
  date,
  description,
  tools = [],
  isActive = false,
}) {
  return (
    <motion.div
      style={{
        position: "relative",
        width: "350px",
        minHeight: "500px",
        borderRadius: "16px",
        overflow: "hidden",
        boxShadow: isActive
          ? "0px 8px 16px rgba(0,0,0,0.3)"
          : "0px 4px 8px rgba(0,0,0,0.15)",
        transform: isActive ? "scale(1.05)" : "scale(0.9)",
        transition: "all 0.3s ease-in-out",
        background: `url(${background}) center/cover no-repeat`,
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        color: "#fff",
      }}
    >
      {/* Dark overlay for readability */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: "linear-gradient(to top, rgba(0,0,0,0.7), rgba(0,0,0,0))",
        }}
      />

      <div style={{ position: "relative", padding: "15px", zIndex: 2 }}>
        <h3
          style={{ margin: "0 0 5px", fontSize: "1.4rem", fontWeight: "bold" }}
        >
          {title}
        </h3>
        <p style={{ margin: "0 0 10px", fontSize: "0.9rem", opacity: 0.8 }}>
          {date}
        </p>
        <p style={{ fontSize: "0.95rem", marginBottom: "10px" }}>
          {description}
        </p>

        {tools.length > 0 && (
          <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
            {tools.map((tool, i) => (
              <span
                key={i}
                style={{
                  fontSize: "0.8rem",
                  padding: "3px 8px",
                  background: "rgba(255,255,255,0.2)",
                  borderRadius: "8px",
                }}
              >
                {tool}
              </span>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
}
