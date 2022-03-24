import { createTheme } from "@mui/material/styles";
import { green } from "@mui/material/colors";
const themeMode = "dark";
export const customTheme: any = createTheme({

  palette: {
    
    mode: themeMode,
    primary: {
      main: "#f3f3f3",
      dark: "hsl(207, 26%, 17%)",
      light: "hsl(0, 0%, 98%)",
    },
    secondary: {
      light: "hsl(0, 0%, 100%)",
      dark: " hsl(209, 23%, 22%)",
      main: green[200],
    },
  },
  typography: {
    fontFamily: "Nunito Sans",

    h1: {
      fontSize: 36,
      fontWeight: 500,
      color: themeMode === "dark" ? "hsl(0, 0%, 100%)" : "hsl(200, 15%, 8%)",
    },
    h2: {
      fontSize: 32,
      fontWeight: 600,
      color: themeMode === "dark" ? "hsl(0, 0%, 100%)" : "hsl(200, 15%, 8%)",
    },
    h3: {
      fontSize: 18,
      color: themeMode === "dark" ? "hsl(0, 0%, 100%)" : "hsl(200, 15%, 8%)",
      fontWeight: "800",
    },
    h4: {
      fontSize: 18,
      color: themeMode === "dark" ? "hsl(0, 0%, 100%)" : "hsl(200, 15%, 8%)",
      fontWeight: "800",
    },
    h5: {
      fontSize: 16,
      color: themeMode === "dark" ? "hsl(0, 0%, 100%)" : "hsl(200, 15%, 8%)",
      fontWeight: "600",
    },
    h6: {
      fontSize: 14,
      color: themeMode === "dark" ? "hsl(0, 0%, 100%)" : "hsl(200, 15%, 8%)",
    },
    body1: {
      fontSize: 14,
      color: themeMode === "dark" ? "hsl(0, 0%, 100%)" : "hsl(200, 15%, 8%)",
      fontWeight: "600",
    },
    button: {
      // type: themeMode,
      // backgroundColor: themeMode === "dark" ? "#222831" : "#f3f3f3",
      // color: themeMode === "dark" ? "hsl(0, 0%, 98%)" : "#222831",
    },
  },
});
