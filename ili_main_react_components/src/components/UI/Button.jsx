import React from "react";

export default function Button({ children, className, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`${className} border-indigo-600 bg-indigo-600 text-white rounded-md p-2`}
    >
      {children}
    </button>
  );
}