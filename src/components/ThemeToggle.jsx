"use client";
import { useState, useEffect } from "react";
import "../styles/ThemeToggle.css";

export default function ThemeToggle() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    document.body.classList.toggle("light-mode", !isDarkMode);
  }, [isDarkMode]);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  return (
    <button
      className={`toggle-btn ${isDarkMode ? "dark" : "light"}`}
      onClick={toggleTheme}
    >
      <div className={`toggle-slider ${isDarkMode ? "dark" : "light"}`}>
        <div className="toggle-circle">{isDarkMode ? "🌙" : "☀️"}</div>
      </div>
    </button>
  );
}
