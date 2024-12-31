import React from "react";

const Button = ({ text, type, onClick }) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className="bg-emerald-500 px-4 py-2 rounded-md text-white font-semibold"
    >
      {text}
    </button>
  );
};

export default Button;
