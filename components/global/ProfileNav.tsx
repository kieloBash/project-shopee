import React from "react";
import { UserType } from "@/libs/interfaces/user.interface";
import Image from "next/image";

const ProfileNav = ({ user }: { user: UserType }) => {
  return (
    <div className="flex justify-between items-center w-full">
      <div className="flex gap-2 justify-start items-center">
        <div className="relative overflow-hidden rounded-full w-10 h-10">
          {user?.image ? <Image fill src={user?.image} alt="avatar" /> : null}
        </div>
        <h1 className="line-clamp-1 text-lg">Hi, {user.name.split(" ")[0]}</h1>
      </div>
    </div>
  );
};

export default ProfileNav;
