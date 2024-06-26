import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#ffffff",
    },
    secondary: {
      main: "#da5777",
    },
    error: {
      main: "#d00001",
    },
    warning: {
      main: "#ffb501",
    },
    info: {
      main: "#77dbff",
    },
    success: {
      main: "#00d199",
    },
  },
});

export default theme;
