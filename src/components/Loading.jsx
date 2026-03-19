import React from "react";

const Loading = () => {
  // Common loading fallback component (reuse hota hai Home aur Details pages me).
  return (
    <div className="w-full h-full flex justify-center items-center">
      <h1 className="text-6xl">Loading</h1>
    </div>
  );
};

export default Loading;
