import { useTasks } from "@/context/taskContext";
import { edit, star, trash } from "@/utils/Icons";
import { Task } from "@/utils/types";
import { formatTime, formatDueDate, overdueTasks } from "@/utils/utilities";
import React from "react";
import { motion } from "framer-motion";
import { item } from "@/utils/animations";

interface TaskItemProps {
  task: Task;
}

function TaskItem({ task }: TaskItemProps) {
  const getPriorityColor = (proirity: string) => {
    switch (proirity) {
      case "low":
        return "text-[#2cc0b8]";
      case "medium":
        return "text-[#cea800]";
      case "high":
        return "text-[#f75239]";
      default:
        return "text-[#f75239]";
    }
  };

  const { getTask, openEditModal, activeTasks, openConfirmModal, modalMode } =
    useTasks();

  return (
    <motion.div
      variants={item}
      className="h-[16rem] px-4 py-3 flex flex-col gap-4 shadow-sm bg-[#efefef] rounded-lg border-2 border-white "
    >
      <div className="h-full">
        <h4 className="font-bold text-2xl">{task.title}</h4>
        <p>{task.description}</p>
      </div>
      <p
        className={`mt-auto text-sm ${
          overdueTasks(activeTasks).includes(task)
            ? "text-[#f75239]"
            : task.completed
            ? "text-[#999]"
            : "text-[#555]"
        } `}
      >
        Due: {formatDueDate(task.dueDate)}
      </p>
      <div className="mt-auto flex justify-between items-center">
        <p className="text-sm text-[#afafaf]">{formatTime(task.createdAt)}</p>
        <p className={`text-sm font-bold ${getPriorityColor(task.priority)}`}>
          {task.priority}
        </p>
        <div className="flex items-center gap-4">
          <button
            className={`${task.completed ? "text-yellow-400" : "text-[#555]"}`}
          >
            {star}
          </button>
          <button
            onClick={() => {
              getTask(task._id);
              openEditModal(task);
            }}
            className="text-[#3f71e375]"
          >
            {edit}
          </button>
          <button
            onClick={() => {
              console.log(task);
              getTask(task._id);
              openConfirmModal(task);
            }}
            className="text-[#f3321490]"
          >
            {trash}
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export default TaskItem;
