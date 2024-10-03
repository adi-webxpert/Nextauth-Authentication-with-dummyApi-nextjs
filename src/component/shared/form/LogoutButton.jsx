"use client";
import { signOut } from "next-auth/react";
import React from "react";
const LogoutButton = () => {
  return (
    <div>
      <button
        onClick={() => {
          signOut({ callbackUrl: "/auth/signin", redirect: true });
        }}
        className=" bg-red-600 hover:bg-red-700 text-white font-bold cursor-pointer px-6 py-2 rounded-md"
      >
        Sign out
      </button>
    </div>
  );
};
export default LogoutButton;
