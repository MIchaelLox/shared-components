// src/components/ThemeToggle.tsx
import { useState, useEffect } from "react";

export type Theme = "light" | "dark";

export interface ThemeToggleProps {
  initialTheme?: Theme;
}

export function ThemeToggle({ initialTheme = "light" }: ThemeToggleProps) {
  const [theme, setTheme] = useState<Theme>(initialTheme);

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [theme]);

  const toggle = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <button
      type="button"
      onClick={toggle}
      className="px-3 py-1 rounded border border-gray-500 text-sm"
    >
      Toggle theme (current: {theme})
    </button>
  );
}
