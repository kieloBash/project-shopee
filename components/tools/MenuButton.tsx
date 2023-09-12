"use client";
import React from "react";
import { useSidebar } from "../contexts/SidebarContext";

const MenuButton = () => {
  const { toggleSidebar } = useSidebar();

  return (
    <button className="" type="button" onClick={toggleSidebar}>
      menu
    </button>
  );
};

export default MenuButton;
