import React from "react";

interface InputProps {
  label: string;
  placeholder: string;
  helperText?: string;
}

const Input: React.FC<InputProps> = ({ label, placeholder, helperText }) => {
  return (
    <div className="flex flex-col">
      <label className="mb-2 text-sm font-medium text-gray-700">{label}</label>
      <div className="relative">
        <input
          type="text"
          placeholder={placeholder}
          className="w-full py-2 pl-3 pr-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <div className="absolute inset-y-0 right-0 flex items-center pr-3">
          <svg
            className="w-5 h-5 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M2.458 12C3.732 7.943 7.522 5 12 5c4.478 0 8.268 2.943 9.542 7-.023.16-.035.322-.035.485 0 .163.012.324.035.485C20.268 16.057 16.478 19 12 19c-4.478 0-8.268-2.943-9.542-7A4.49 4.49 0 012 12.485C2 12.322 2.012 12.161 2.035 12z"
            />
          </svg>
        </div>
      </div>
      {helperText && <p className="mt-2 text-sm text-gray-500">{helperText}</p>}
    </div>
  );
};

export default Input;
