import React from "react";
import MenuButton from "../tools/MenuButton";
import AddButton from "../tools/AddButton";

const Navbar = () => {
  return (
    <header className="">
      <nav className="w-full p-4 flex justify-between items-center shadow text-lg">
        <div className="flex gap-4">
          <MenuButton />
          <div className="font-bold text-accent-600">LizBoutique</div>
        </div>
        <AddButton />
      </nav>
    </header>
  );
};

export default Navbar;
