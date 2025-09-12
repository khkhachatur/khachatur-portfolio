import { styled } from "@mui/material/styles";

export const Container = styled("div")(({ theme }) => ({
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "flex-start",
  backgroundColor: theme.palette.background.default, // fallback background
}));

//==============================TOP SECTION STYLES==============================
export const TopSection = styled("section")(() => ({
  width: "100%",
  minHeight: "540px", // full viewport height
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
  backgroundImage: "url('../portfolio/images/khachatur.png')",
  backgroundSize: "cover",
  backgroundPosition: "center",
  padding: 0,
  margin: 0,
}));

export const InteractiveSection = styled("section")(() => ({
  width: "100%",
  maxWidth: "1200px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "0",
  marginTop: "0",
}));

export const IconSection = styled("div")(() => ({
  display: "flex",
  alignItems: "center",
  gap: "16px",
  padding: 0,
  margin: 0,
}));

//==============================MAIN TRACK==============================

//==============================MAIN TRACK==============================
