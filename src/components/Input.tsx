import React from "react";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export const Input: React.FC<InputProps> = ({ label, id, ...props }) => {
  const inputId = id ?? props.name ?? `input-${Math.random().toString(36).slice(2)}`;
  return (
    <div className="flex flex-col gap-1 text-sm">
      {label && (
        <label htmlFor={inputId} className="font-medium text-slate-700 dark:text-slate-200">
          {label}
        </label>
      )}
      <input
        id={inputId}
        className="rounded-md border border-slate-300 bg-white px-2 py-1 text-sm text-slate-900 shadow-sm outline-none ring-0 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 dark:border-slate-600 dark:bg-slate-900 dark:text-slate-50"
        {...props}
      />
    </div>
  );
};
