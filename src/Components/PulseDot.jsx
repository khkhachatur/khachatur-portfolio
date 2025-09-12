import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function PulseDot({
  icon = "/portfolio/icons/f1car.png",
  onClick,
}) {
  const [showIcon, setShowIcon] = useState(false);

  const handleClick = () => {
    setShowIcon(true);
    if (onClick) onClick();
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "15px",
      }}
    >
      <AnimatePresence>
        {!showIcon ? (
          <>
            {/* 🔵 Pulsing Dot */}
            <motion.div
              onClick={handleClick}
              initial={{ scale: 0 }}
              animate={{
                scale: [1, 1.2, 1],
                boxShadow: [
                  "0 0 0 0 rgba(255,255,255,0.7)",
                  "0 0 0 15px rgba(255,255,255,0)",
                ],
              }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut",
              }}
              style={{
                width: "25px",
                height: "25px",
                backgroundColor: "#fff",
                borderRadius: "50%",
                cursor: "pointer",
              }}
            />

            {/* ✨ Click Here Text */}
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              style={{
                marginBottom: "40px",
                color: "#fff",
                fontSize: "1rem",
                fontWeight: "300",
                textAlign: "center",
                cursor: "pointer",
              }}
              onClick={handleClick}
            >
              click here
            </motion.span>
          </>
        ) : (
          // 🚗 F1 Car appears
          <motion.img
            src="/portfolio/iocns/f1car.PNG"
            alt="F1 car"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1.3, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            style={{
              width: "50px",
              height: "50px",
              cursor: "pointer",
              filter: "drop-shadow(0px 0px 10px rgba(255,255,255,0.8))",
            }}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
