import React, { createContext } from "react";
export const themes = {
  light: {
    font: "black",
    background: "#E5E5E5",
  },
  dark: {
    font: "white",
    background: "#252525",
  },
};
const ThemeContext = createContext(themes.light);
export default ThemeContext;
