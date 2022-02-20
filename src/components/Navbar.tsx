import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import React from "react";
import { useAppContext } from "../contexts/AppContext";

const Navbar = () => {
  const { themeMode, setThemeMode }: any = useAppContext();

  const navbgColor =
    themeMode === "dark" ? "secondary.dark" : "secondary.light";

  const buttonText = themeMode === "dark" ? "DARK MODE" : "LIGHT MODE";
  const themeModeIcon =
    themeMode === "dark" ? <DarkModeIcon /> : <LightModeIcon />;
  const textColor = themeMode === "dark" ? "primary.light" : "primary.dark";
  const handleChangeTheme = () => {
    if (themeMode === "dark") {
      setThemeMode("light");
    } else {
      setThemeMode("dark");
    }
  };
  return (
    <AppBar>
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          backgroundColor: navbgColor,
        }}
      >
        <Typography variant="h3" color={textColor}>
          Where in the World
        </Typography>
        <Button
          startIcon={themeModeIcon}
          onClick={handleChangeTheme}
          sx={{ color: textColor }}
        >
          {buttonText}
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
