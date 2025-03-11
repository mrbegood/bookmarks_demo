import React from "react";

export default function InputComponent({
  title,
  type,
  name,
  value,
  placeholder,
  error,
  handleChange,
}) {
  return (
    <div className="flex flex-col w-full gap-2 pb-4">
      <div className="flex justify-between">
        <label className="text-sm text-slate-500">{title}</label>
      </div>
      <input
        className={`input ${error ? "error" : ""}`}
        type={type}
        name={name}
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
      />
      {error && <span className="text-sm text-red-500">{error}</span>}
    </div>
  );
}
