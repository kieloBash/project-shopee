import React from "react";
import MenuButton from "../tools/MenuButton";

const Navbar = () => {
  return (
    <header className="">
      <nav className="w-full p-4 flex justify-between items-center shadow text-lg">
        <div className="flex gap-2">
          <MenuButton />
          <div className="font-bold text-accent-600">LizBotique</div>
        </div>
        <div className="">add</div>
      </nav>
    </header>
  );
};

export default Navbar;
