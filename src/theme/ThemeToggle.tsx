import React from "react";
import { useTheme } from "./ThemeContext";

export const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="inline-flex items-center rounded-full border border-slate-300 bg-white px-3 py-1 text-sm font-medium shadow-sm transition hover:bg-slate-100 dark:border-slate-600 dark:bg-slate-800 dark:hover:bg-slate-700"
    >
      <span className="mr-2 h-2 w-2 rounded-full bg-yellow-400 dark:bg-slate-400" />
      {theme === "light" ? "Light mode" : "Dark mode"}
    </button>
  );
};
