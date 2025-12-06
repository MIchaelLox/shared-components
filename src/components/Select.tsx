import React from "react";

export interface SelectOption {
  label: string;
  value: string;
}

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  options: SelectOption[];
}

export const Select: React.FC<SelectProps> = ({ label, options, id, ...props }) => {
  const selectId = id ?? props.name ?? `select-${Math.random().toString(36).slice(2)}`;
  return (
    <div className="flex flex-col gap-1 text-sm">
      {label && (
        <label htmlFor={selectId} className="font-medium text-slate-700 dark:text-slate-200">
          {label}
        </label>
      )}
      <select
        id={selectId}
        className="rounded-md border border-slate-300 bg-white px-2 py-1 text-sm text-slate-900 shadow-sm outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 dark:border-slate-600 dark:bg-slate-900 dark:text-slate-50"
        {...props}
      >
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
};
