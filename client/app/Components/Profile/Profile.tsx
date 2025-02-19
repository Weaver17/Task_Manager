"use client";
import { useTasks } from "@/context/taskContext";
import { useUserContext } from "@/context/userContext";
import { overdueTasks } from "@/utils/utilities";
import Image from "next/image";
import React from "react";

function Profile() {
  const { user } = useUserContext();
  const { tasks, activeTasks, completedTasks, profileModal, openProfileModal } =
    useTasks();
  return (
    <div className="m-6">
      <div
        onClick={openProfileModal}
        className=" px-2 py-4 flex items-center gap-3 bg-[#dfdfdf] rounded-[0.8rem] hover:bg-[#cfcfcf] transition duration-300 ease-in-out cursor-pointer border-2 border-transparent hover:border-[#3f71e3]"
      >
        <div>
          <Image
            src={user?.photo}
            alt="avatar"
            width={70}
            height={70}
            className="h-[70px] w-[70px] rounded-full "
          />
        </div>
        <div>
          <h1 className="flex flex-col text-xl ">
            <span className="font-medium">Hello,</span>
            <span className="font-bold">{user?.name}</span>
          </h1>
        </div>
      </div>
      <div className="mt-6 flex flex-col gap-8">
        <div className="grid grid-cols-2 gap-4">
          <div className="text-gray-400">
            <p>Total Tasks:</p>
            <p className="pl-4 relative flex gap-2">
              <span className="absolute h-[70%] w-[0.2rem] left-[1px] top-2 bg-[#3f71e3] rounded-[5px] "></span>
              <span className="font-medium text-4xl text-[#333]">
                {tasks.length}
              </span>
            </p>
          </div>
          <div className="text-gray-400">
            <p>In Progress:</p>
            <p className="pl-4 relative flex gap-2">
              <span className="absolute h-[70%] w-[0.2rem] left-[1px] top-2 bg-[#777] rounded-[5px] "></span>
              <span className="font-medium text-4xl text-[#333]">
                {activeTasks.length}
              </span>
            </p>
          </div>
          <div className="text-gray-400">
            <p>Overdue Tasks:</p>
            <p className="pl-4 relative flex gap-2">
              <span className="absolute h-[70%] w-[0.2rem] left-[1px] top-2 bg-[#e46732] rounded-[5px] "></span>
              <span className="font-medium text-4xl text-[#333]">
                {overdueTasks(activeTasks).length}
              </span>
            </p>
          </div>
          <div className="text-gray-400">
            <p>Completed:</p>
            <p className="pl-4 relative flex gap-2">
              <span className="absolute h-[70%] w-[0.2rem] left-[1px] top-2 bg-[#39b520] rounded-[5px] "></span>
              <span className="font-medium text-4xl text-[#333]">
                {completedTasks.length}
              </span>
            </p>
          </div>
        </div>
      </div>
      <h3 className="mt-8 font-medium">Activity</h3>
    </div>
  );
}

export default Profile;
