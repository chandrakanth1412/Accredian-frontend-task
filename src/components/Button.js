import React from "react";

const Button = ({ text }) => {
  return (
    <button className="bg-black text-white px-6 py-3 mt-4 rounded-md hover:bg-gray-800 transition">
      {text}
    </button>
  );
};

export default Button;
