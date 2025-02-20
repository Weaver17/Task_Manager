"use client";
import { useTasks } from "@/context/taskContext";
import useDetectOutside from "@/hooks/useDetectOutside";
import React, { useEffect } from "react";

function ConfirmModal() {
  const { task, closeModal, activeTask, confirmModal, deleteTask } = useTasks();
  const ref = React.useRef<HTMLFormElement>(
    null
  ) as React.RefObject<HTMLFormElement>;

  useDetectOutside({
    ref,
    callback: () => {
      if (confirmModal) {
        closeModal();
      }
    },
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    deleteTask(activeTask._id);
    closeModal();
  };

  return (
    <div className="fixed left-0 top-0 z-50 h-full w-full bg-[#33333330] overflow-hidden ">
      <form
        ref={ref}
        action=""
        onSubmit={handleSubmit}
        className="py-5 px-6 max-w-[520px] w-full flex flex-col gap-3 bg-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-lg shadow-md   "
      >
        <div className="flex flex-col justify-center items-center">
          <p className="mb-4">Are you sure you want to delete this task?</p>
          <h4 className="font-bold text-2xl">{task?.title}</h4>
        </div>
        <div className="mt-8 ">
          <button
            type="submit"
            className="text-white py-2 rounded-md w-full bg-red-500 hover:bg-red-800 transition duration-300 ease-in-out"
          >
            Delete Task
          </button>
        </div>
      </form>
    </div>
  );
}

export default ConfirmModal;
