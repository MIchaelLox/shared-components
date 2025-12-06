import React from "react";

export interface TableColumn<T> {
  key: keyof T;
  header: string;
}

interface TableProps<T> {
  columns: TableColumn<T>[];
  data: T[];
}

export function SimpleTable<T extends Record<string, any>>({ columns, data }: TableProps<T>) {
  return (
    <div className="overflow-x-auto rounded-lg border border-slate-200 dark:border-slate-700">
      <table className="min-w-full divide-y divide-slate-200 text-sm dark:divide-slate-700">
        <thead className="bg-slate-50 dark:bg-slate-800">
          <tr>
            {columns.map((col) => (
              <th
                key={String(col.key)}
                className="px-3 py-2 text-left text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-300"
              >
                {col.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-200 bg-white dark:divide-slate-800 dark:bg-slate-900">
          {data.map((row, i) => (
            <tr key={i}>
              {columns.map((col) => (
                <td key={String(col.key)} className="px-3 py-2 text-slate-700 dark:text-slate-100">
                  {String(row[col.key])}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
