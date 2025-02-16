import asyncHandler from "express-async-handler";
import TaskModel from "../../models/task/taskModel.js";

export const createTask = asyncHandler(async (req, res) => {
  try {
    const { title, description, dueDate, priority, status } = req.body;

    if (!title || title.trim() === "") {
      res.status(400).json({ message: "Title is required" });
    }

    const task = new TaskModel({
      title,
      description,
      dueDate,
      priority,
      status,
      user: req.user._id,
    });

    await task.save();

    res.status(201).json(task);
  } catch (e) {
    console.error("Error in creastTask: ", e.message);
    res.status(500).json({ message: e.message });
  }
});

export const getTasks = asyncHandler(async (req, res) => {
  try {
    const userId = req.user._id;

    if (!userId) {
      res.status(404).json({ message: "User not found!" });
    }

    const tasks = await TaskModel.find({ user: userId });

    res.status(200).json({
      length: tasks.length,
      tasks,
    });
  } catch (e) {
    console.error("Error in getTasks: ", e.message);
    res.status(500).json({ message: e.message });
  }
});

export const getTask = asyncHandler(async (req, res) => {
  try {
    const userId = req.user._id;
    const { id } = req.params;

    if (!id) {
      res.status(400).json({ message: "Please provide task id" });
    }

    const task = await TaskModel.findById(id);

    if (!task) {
      res.status(404).json({ message: "Task not found" });
    }

    if (!task.user.equals(userId)) {
      res.status(401).json({ message: "Access denied!" });
    }

    res.status(200).json(task);
  } catch (e) {
    console.error("Error in getTask: ", e.message);
    res.status(500).json({ message: e.message });
  }
});

export const updateTask = asyncHandler(async (req, res) => {
  try {
    const userId = req.user._id;
    const { id } = req.params;
    const { title, description, dueDate, priority, status, completed } =
      req.body;

    if (!id) {
      res.status(400).json({ message: "Please provide task id" });
    }

    const task = await TaskModel.findById(id);

    if (!task) {
      res.status(404).json({ message: "Task not found" });
    }

    if (!task.user.equals(userId)) {
      res.status(401).json({ message: "Access denied!" });
    }

    task.title = title || task.title;
    task.description = description || task.description;
    task.dueDate = dueDate || task.dueDate;
    task.priority = priority || task.priority;
    task.status = status || task.status;
    task.completed = completed || task.completed;

    await task.save();

    res.status(200).json(task);
  } catch (e) {
    console.error("Error in updateTask: ", e.message);
    res.status(500).json({ message: e.message });
  }
});

export const deleteTask = asyncHandler(async (req, res) => {
  try {
    const userId = req.user._id;
    const { id } = req.params;

    const task = await TaskModel.findById(id);

    if (!task) {
      res.status(404).json({ message: "Task not found" });
    }

    if (!task.user.equals(userId)) {
      res.status(401).json({ message: "Access denied!" });
    }

    await TaskModel.findByIdAndDelete(id);

    res.status(200).json({ message: "Task deleted successfully!" });
  } catch (e) {
    console.error("Error in deleteTask: ", e.message);
    res.status(500).json({ message: e.message });
  }
});
