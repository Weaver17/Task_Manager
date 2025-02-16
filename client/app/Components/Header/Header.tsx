"use client";
import { useUserContext } from "@/context/userContext";
import { github, moon, profile } from "@/utils/Icons";
import Link from "next/link";
import React from "react";

const Header = () => {
  const { user } = useUserContext();

  const { name } = user;

  const userId = user._id;

  return (
    <header className="p-6  w-full flex items-center justify-between bg-[#efefef] dark:bg-2">
      <div>
        <h1 className="text-lg font-medium">
          <span role="img" aria-label="wave">
            👋
          </span>
          {userId ? `Welcome, ${name}!` : "Welcome to Task Manager App"}
        </h1>
        <p className="text-sm">
          {userId ? (
            <>
              You have <span className="font-bold text-[#2f71e3]">5</span>{" "}
              active tasks
            </>
          ) : (
            "Please login to view your tasks"
          )}
        </p>
      </div>
      <div className="h-[50px] flex items-center gap-[10.4rem]">
        <button className="px-8 py-3 bg-[#2f71e3] text-white rounded-[50px] hover:opacity-75 transition-opacity duration-300 ease-in-out">
          Create New Task
        </button>

        <div className="flex gap-4 items-center">
          <Link
            href="https://github.com/Weaver17"
            passHref
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#943fe3] h-8 w-8 opacity-50 hover:opacity-100 duration-300 ease-in-out"
          >
            {github}
          </Link>
          <Link
            href="https://github.com/Weaver17"
            passHref
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#3f71e3] h-8 w-8 opacity-50 hover:opacity-100 duration-300 ease-in-out"
          >
            {profile}
          </Link>
          <Link
            href="https://github.com/Weaver17"
            passHref
            target="_blank"
            rel="noopener noreferrer"
            className="h-8 w-8 opacity-50 hover:opacity-100 duration-300 ease-in-out"
          >
            {moon}
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
