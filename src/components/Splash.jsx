import React from "react";

function Splash() {
  return (
    <>
      <div className="absolute top-0 left-0 w-full h-full bg-gray-100 z-50 flex justify-center items-center">
        <div className="animate-spin rounded-full h-48 w-48 border-t-2 border-red-500"></div>
        <div className="absolute flex-col top-0 left-0 w-full h-full bg-transparent z-40 flex justify-center items-center">
          <h1 className="text-3xl font-bold text-red-500">findEvents</h1>
          <p className="text-xs font-extralight">Aradığın eğlence.</p>
        </div>
      </div>
    </>
  );
}

export default Splash;
