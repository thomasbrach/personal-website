import { createMuiTheme } from "@material-ui/core";

export const customTheme = createMuiTheme({
  palette: {
    primary: {
      main: "#e0e0e0",
    },
    secondary: {
      main: "#64ffda",
    },
  },
  typography: {
    fontFamily: "Open Sans",
    h1: { fontFamily: "Poppins" },
    h2: { fontFamily: "Poppins" },
  },
});
