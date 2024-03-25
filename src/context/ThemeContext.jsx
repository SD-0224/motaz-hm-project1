import React, { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

const bodyClasses = document.body.classList;

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(localStorage.getItem("theme"));

  const toggleTheme = () => {
    if (theme === "dark") {
      setTheme("light");
      localStorage.setItem("theme", "light");
    } else {
      setTheme("dark");
      localStorage.setItem("theme", "dark");
    }
  };

  useEffect(() => {
    if (theme === "dark") {
      bodyClasses.add("dark");
    } else if (theme === "light") {
      bodyClasses.remove("dark");
    }
  }, [theme]);

  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>;
};

export const useTheme = () => {
  return useContext(ThemeContext);
};
