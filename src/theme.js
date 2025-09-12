import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    background: {
      default: "#69141F",
    },
  },
  typography: {
    fontFamily: ["Roboto", "sans-serif"].join(","),
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        "*, *::before, *::after": {
          margin: 0,
          padding: 0,
          boxSizing: "border-box",
        },
        body: {
          margin: 0,
          padding: 0,
        },
        section: {
          margin: 0,
          padding: 0,
        },
      },
    },
  },
});

export default theme;
