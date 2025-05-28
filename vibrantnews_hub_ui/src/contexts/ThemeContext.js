import React, { createContext, useState, useEffect } from "react";

// PUBLIC_INTERFACE
export const ThemeContext = createContext();

/**
 * ThemeProvider for dark and light mode.
 * Provides theme value (light/dark) and a toggle function via context.
 */
export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() =>
    localStorage.getItem("theme") || "light"
  );

  useEffect(() => {
    localStorage.setItem("theme", theme);
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("darkmode");
    } else {
      root.classList.remove("darkmode");
    }
  }, [theme]);

  // PUBLIC_INTERFACE
  const toggleTheme = () =>
    setTheme((prev) => (prev === "light" ? "dark" : "light"));

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
