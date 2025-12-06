import React from "react";

export const Card: React.FC<{ title?: string; children: React.ReactNode }> = ({
  title,
  children,
}) => {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-700 dark:bg-slate-900/60">
      {title && <h2 className="mb-2 text-base font-semibold">{title}</h2>}
      <div className="text-sm text-slate-700 dark:text-slate-200">{children}</div>
    </div>
  );
};
