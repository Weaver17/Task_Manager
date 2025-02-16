"use client";
import IconCheck from "@/public/icons/IconCheck";
import IconFileCheck from "@/public/icons/IconFileCheck";
import IconGrid from "@/public/icons/IconGrid";
import IconStopwatch from "@/public/icons/IconStopwatch";
import { usePathname } from "next/navigation";
import React from "react";
import logo from "../../../public/task_logo.svg";
import Image from "next/image";
import Link from "next/link";
import IconDeleteAll from "@/public/icons/IconDeleteAll";

const MiniSidebar = () => {
  const pathname = usePathname();

  const getStrokeColor = (link: string) => {
    return pathname === link ? "#2f71e3" : "#71717a";
  };

  const navItems = [
    {
      icon: <IconGrid strokeColor={getStrokeColor("/")} />,
      title: "All",
      link: "/",
    },
    {
      icon: <IconFileCheck strokeColor={getStrokeColor("/completed")} />,
      title: "Completed",
      link: "/completed",
    },
    {
      icon: <IconCheck strokeColor={getStrokeColor("/pending")} />,
      title: "Pending",
      link: "/pending",
    },
    {
      icon: <IconStopwatch strokeColor={getStrokeColor("/overdue")} />,
      title: "Overdue",
      link: "/overdue",
    },
  ];

  return (
    <div className="basis-[5rem] flex flex-col bg-[#efefef] ">
      <div className="flex items-center justify-center h-[5rem] border-b-2 border-r-2 rounded-br-[1.5rem] border-[#71717a]">
        <Image
          src={logo}
          alt="Task Manager App"
          className="w-[40px] h-[40px]"
        />
      </div>

      <div className="mt-8 flex-1 flex flex-col items-center justify-between">
        <ul className="flex flex-col gap-10">
          {navItems.map((item, i) => (
            <li className="relative group " key={i}>
              <Link href={item.link}>{item.icon}</Link>

              {/* HOVER TOOLTIP  */}
              <span className="u-triangle absolute top-[50%] translate-y-[-50%] left-8 text-xs pointer-events-none text-white bg-[#2f71e5] dark:bg-2 px-2 py-1 rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 ">
                {item.title}
              </span>
            </li>
          ))}
        </ul>

        <div className="mb-[2.5rem]">
          <button className="w-12 h-12 flex justify-center items-center border-2 border-[#e23030] p-2 rounded-full">
            <IconDeleteAll strokeColor="#e23030" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MiniSidebar;
