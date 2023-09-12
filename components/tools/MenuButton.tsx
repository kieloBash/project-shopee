"use client";
import React from "react";
import { useSidebar } from "../contexts/SidebarContext";
import { MenuIcon } from "../icons";

const MenuButton = () => {
  const { toggleSidebar } = useSidebar();

  return (
    <button className="" type="button" onClick={toggleSidebar}>
      <MenuIcon className="fill-slate-600" size={"xs"} />
    </button>
  );
};

export default MenuButton;
