"use client";
import { useTasks } from "@/context/taskContext";
import useRedirect from "@/hooks/useUserRedirect";
import Filters from "./Components/Filters/Filters";
import TaskItem from "./Components/TaskItem/TaskItem";
import { Task } from "@/utils/types";
import { filteredTasks } from "@/utils/utilities";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { container, item } from "@/utils/animations";
import { add } from "@/utils/Icons";

export default function Home() {
  useRedirect("/login");

  const { tasks } = useTasks();

  return (
    <main className="m-6 h-full">
      <div className="flex justify-between">
        <h1 className="text-2xl font-bold">All Tasks</h1>
        <Filters />
      </div>

      <div className="pb-[2rem] mt-6 grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-[1.5rem]">
        {tasks?.map((task: Task, i: number) => (
          <TaskItem key={i} task={task} />
        ))}
        <button className="h-[16rem] w-full flex justify-center items-center py-2 rounded-md text-lg font-medium text-gray-500 border-dashed border-2 border-gray-400 hover:bg-gray-300 hover:border-none transition duration-200 ease-in-out ">
          {add}
        </button>
      </div>
    </main>
  );
}
