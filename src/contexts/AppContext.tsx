import React, { useContext, createContext, useState } from "react";

export const AppContext = createContext({});

export const useAppContext = () => {
  return useContext(AppContext);
};

type Children = {
  children: React.ReactChild;
};
const AppContextProvider = ({ children }: Children) => {
  const [themeMode, setThemeMode] = useState("dark");

  const textColor = themeMode === "dark" ? "primary.light" : "primary.dark";
  const secondaryTextColor =
    themeMode === "dark" ? "secondary.light" : "secondary.dark";
  const values = {
    themeMode,
    setThemeMode,
    textColor,
    secondaryTextColor,
  };
  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
};

export default AppContextProvider;
