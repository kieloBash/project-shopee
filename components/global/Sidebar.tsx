"use client";
import React from "react";
import { useSidebar } from "../contexts/SidebarContext";
import CloseButton from "../tools/CloseButton";
import { useRouter, usePathname } from "next/navigation";
import { NavLinks } from "@/utils/constants/NavLinks";
import ProfileNav from "./ProfileNav";
import { useSession } from "next-auth/react";
import { UserType } from "@/libs/interfaces/user.interface";
import SignOutButton from "../tools/SignOutButton";
const Sidebar = () => {
  const { isSidebarOpen, toggleSidebar } = useSidebar();
  const router = useRouter();
  const { data: session } = useSession();
  const pathname = usePathname();
  return (
    <>
      {isSidebarOpen ? (
        <section className="w-full max-w-[16rem] flex-1 bg-white p-8 fixed top-0 left-0 z-50 h-full flex flex-col justify-between items-start gap-2">
          <div className="absolute top-8 right-8 z-10">
            <CloseButton close={toggleSidebar} />
          </div>
          <div className="w-full flex flex-col gap-8">
            <ProfileNav user={session?.user as UserType} />
            <ul className="flex flex-col gap-2">
              {NavLinks.map((link) => {
                const isActive =
                  (pathname.includes(link.href) && link.href.length > 1) ||
                  pathname === link.href;

                const activeClass = isActive
                  ? "border-b-2 border-accent-600"
                  : "";
                return (
                  <li className="" key={link.label}>
                    <button
                      type="button"
                      className={`${activeClass} text-left px-2 py-1 flex capitalize`}
                      onClick={() => {
                        router.push(link.href);
                        toggleSidebar();
                      }}
                    >
                      {link.label}
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>

          <SignOutButton />
        </section>
      ) : null}
    </>
  );
};

export default Sidebar;
