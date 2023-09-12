"use client";
import React from "react";
import { useSidebar } from "../contexts/SidebarContext";

const Sidebar = () => {
  const { isSidebarOpen, toggleSidebar } = useSidebar();

  if (!isSidebarOpen) return null;

  return (
    <section className="w-full max-w-sm flex-1 bg-white p-8 fixed top-0 left-0 z-50 h-full">
      <button type="button" onClick={toggleSidebar}>
        close
      </button>
      Sidebar
    </section>
  );
};

export default Sidebar;
