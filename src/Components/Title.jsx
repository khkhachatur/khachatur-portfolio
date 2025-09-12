import { Typography } from "@mui/material";

export default function Title({ sectionName }) {
  return (
    <Typography color="#fff" fontWeight="300" variant="h3" padding="40px 0">
      {sectionName}
    </Typography>
  );
}
