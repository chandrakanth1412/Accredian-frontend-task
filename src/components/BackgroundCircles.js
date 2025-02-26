import React from "react";

const BackgroundCircles = () => {
  return (
    <>
      <div className="absolute top-0 left-0 w-40 h-40 bg-purple-300 rounded-full opacity-50 blur-3xl"></div>
      <div className="absolute top-20 right-0 w-40 h-40 bg-yellow-300 rounded-full opacity-50 blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-40 h-40 bg-pink-300 rounded-full opacity-50 blur-3xl"></div>
    </>
  );
};

export default BackgroundCircles;
