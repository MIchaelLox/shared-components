import React from "react";
import { ThemeToggle } from "../theme";

export const LayoutShell: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-50">
      <header className="border-b border-slate-200 bg-white/80 px-6 py-3 backdrop-blur-sm dark:border-slate-800 dark:bg-slate-900/80">
        <div className="mx-auto flex max-w-5xl items-center justify-between gap-4">
          <div>
            <h1 className="text-lg font-semibold">Shared Components Library</h1>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Internal UI toolkit – buttons, inputs, tables & theming.
            </p>
          </div>
          <ThemeToggle />
        </div>
      </header>

      <main className="mx-auto max-w-5xl space-y-4 px-6 py-6">{children}</main>
    </div>
  );
};
