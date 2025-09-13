import { useState } from "react";
import { motion } from "framer-motion";
import { TextField, Button, Typography } from "@mui/material";
import { Send } from "lucide-react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // For now, just log the data — later we can connect to EmailJS or backend API
    console.log("Form submitted:", formData);

    setFormData({ name: "", email: "", message: "" });
    alert("Message sent successfully!");
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      style={{
        maxWidth: "700px",
        textAlign: "center",
        color: "#fff",
        padding: "20px",
      }}
    >
      {/* Contact Info */}
      <div style={{ marginBottom: "30px" }}>
        <Typography>Email: khachatryankhachatur57@gmail.com</Typography>
        <Typography>Telegram: @kkkk_kkkk_kkkk_k</Typography>
        <Typography>Tel: +244(929) 410 874</Typography>
        <Typography>Location: Luanda, Angola | Yerevan, Armenia</Typography>
      </div>

      {/* Contact Form */}
      <motion.form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "15px",
          background: "rgba(255, 255, 255, 0.05)",
          padding: "20px",
          borderRadius: "16px",
          boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.3)",
        }}
      >
        <TextField
          label="Your Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          fullWidth
          variant="outlined"
          InputLabelProps={{ style: { color: "#fff" } }}
          InputProps={{
            style: { color: "#fff" },
          }}
        />
        <TextField
          label="Your Email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          required
          fullWidth
          variant="outlined"
          InputLabelProps={{ style: { color: "#fff" } }}
          InputProps={{
            style: { color: "#fff" },
          }}
        />
        <TextField
          label="Your Message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          fullWidth
          multiline
          rows={4}
          variant="outlined"
          InputLabelProps={{ style: { color: "#fff" } }}
          InputProps={{
            style: { color: "#fff" },
          }}
        />

        <Button
          type="submit"
          variant="contained"
          endIcon={<Send size={18} />}
          sx={{
            borderRadius: "30px",
            background: "#69141F",
            "&:hover": { background: "#8c1c2b" },
          }}
        >
          Send Message
        </Button>
      </motion.form>
    </motion.section>
  );
}
