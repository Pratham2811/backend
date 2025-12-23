import express from "express";

import { createTodo, deleteTodo, editTodo, getAlltodos, getTodo } from "../controllers/todoController.js";

const router = express.Router();

// Create a new to-do item
router.post("/", createTodo);

// Get all to-do items
router.get("/",getAlltodos);

// Get single to-do item
router.get("/:id",getTodo);

// Update a to-do item
router.put("/:id",editTodo);

// Delete a to-do item
router.delete("/:id",deleteTodo);

export default router;
