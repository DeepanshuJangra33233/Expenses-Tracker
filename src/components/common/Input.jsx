import React from "react";

const Input = ({ type, value, onChange, placeHolder, name }) => {
  return (
    <input
      name={name}
      onChange={onChange}
      value={value}
      placeholder={placeHolder}
      className="border border-solid border-gray-500 rounded-md py-2 px-3 bg-transparent outline-none"
      type={type}
    />
  );
};

export default Input;
