import React from "react";
import MenuItems from "./MenuItems";

function Header() {
  
  return (
    <div className="fixed z-30 mb-10 justify-center flex h-14 bg-white   w-full p-5 items-center sm:justify-between">
      <h1 className="text-2xl font-bold bg-transparent text-red-500">findEvents</h1>
      <ul className="hidden sm:flex flex-row space-x-2">
        <MenuItems />
      </ul>
      
      
    </div>
  );
}

export default Header;
