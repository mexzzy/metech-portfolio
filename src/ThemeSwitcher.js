import React, { useState, useEffect } from "react";
import { BiMoon, BiSun } from "react-icons/bi";

const ThemeSwitcher = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme ", newTheme);
  };

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <div className="theme-switcher">
      <div onClick={toggleTheme}>
        {theme === "light" ? <BiMoon /> : <BiSun />} 
      </div>
    </div>
  );
};

export default ThemeSwitcher;
