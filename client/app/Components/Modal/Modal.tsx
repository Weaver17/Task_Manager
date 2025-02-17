"use client";
import { useTasks } from "@/context/taskContext";
import useDetectOutside from "@/hooks/useDetectOutside";
import React, { useEffect } from "react";

function Modal() {
  const { task, handleInput, createTask } = useTasks();

  useEffect(() => {}, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    createTask(task);
  };

  return (
    <div className="fixed left-0 top-0 z-50 h-full w-full bg-[#33333330] overflow-hidden ">
      <form
        action=""
        onSubmit={handleSubmit}
        className="py-5 px-6 max-w-[520px] w-full flex flex-col gap-3 bg-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-lg shadow-md   "
      >
        <div className="flex flex-col gap-1">
          <label htmlFor="title">Title</label>
          <input
            className="bg-[#efefef] p-2 rounded-md border"
            type="text"
            name="title"
            id="title"
            placeholder="Task Title"
            value={task?.title}
            onChange={(e) => handleInput("title")(e)}
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="description">Description</label>
          <textarea
            className="bg-[#efefef] p-2 rounded-md border"
            rows={4}
            name="description"
            id="description"
            placeholder="Task Description"
            value={task?.description}
            onChange={(e) => handleInput("description")(e)}
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="priority">Priority</label>
          <select
            className="bg-[#efefef] p-2 rounded-md border"
            name="priority"
            id="priority"
            value={task?.priority}
            onChange={(e) => handleInput("priority")(e)}
          >
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="duedate">Due Date</label>
          <input
            className="bg-[#efefef] p-2 rounded-md border"
            type="date"
            name="dueDate"
            id="dueDate"
            value={task?.dueDate}
            onChange={(e) => handleInput("dueDate")(e)}
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="completed">Task Completed</label>
          <div className="flex items-center justify-between bg-[#efefef] p-2  ">
            <label htmlFor="completed">Completed</label>
            <select
              className="bg-[#efefef] p-2 rounded-md border-none cursor-pointer"
              name="completed"
              id="completed"
              value={task?.completed ? "true" : "false"}
              onChange={(e) => handleInput("completed")(e)}
            >
              <option value="false">No</option>
              <option value="true">Yes</option>
            </select>
          </div>
        </div>

        <div className="mt-8 ">
          <button type="submit">Create Task</button>
        </div>
      </form>
    </div>
  );
}

export default Modal;
