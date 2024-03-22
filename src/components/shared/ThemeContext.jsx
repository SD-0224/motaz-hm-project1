import React, { createContext, useEffect, useState } from "react";

export const ThemeContext = React.createContext();
export const ThemeContextUpdate = React.createContext();

const bodyClasses = document.body.classList;

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(`${localStorage.theme}`);

  const toggleTheme = () => {
    if (theme === "dark") {
      setTheme("light");
      localStorage.theme = "light";
    } else {
      setTheme("dark");
      localStorage.theme = "dark";
    }
  };

  useEffect(() => {
    if (theme === "dark") {
      bodyClasses.add("dark");
    } else if (theme === "light") {
      bodyClasses.remove("dark");
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={theme}>
      <ThemeContextUpdate.Provider value={toggleTheme}>{children}</ThemeContextUpdate.Provider>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
