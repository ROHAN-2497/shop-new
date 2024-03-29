import React, { useContext } from "react";
import ThemeContext from "../contexts/ThemeContext";

const useTheme = () => {
  const theme = useContext(ThemeContext);
  const isClient = typeof window === "undefined";
  if (!isClient && !theme) return {};
  if (!theme) {
    throw new Error(
      "you must wrap your application with themeProvider to use the  useTheme"
    );
  }
  return theme;
};

export default useTheme;
