import { ObjectId } from "mongodb";
import Todo from "../models/todosSchem.js";

export const getAlltodos= async (req, res) => {
  try {
    const todos = await Todo.find();
    console.log(todos);
    
    // res.status(200).json(todos);
    res.render('getAlltodos',{todos})
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch todos" });
  }
}
export const createTodo=async (req, res) => {
  const todo = req.body;
  console.log(todo);
  
  try {
    const result = new Todo(todo);
    const todoData=await result.save();
    // res.status(201).json(result);
    res.redirect('/todos')
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Failed to create todo" });
  }
}
export const getTodo=async (req, res) => {
  try {
    const todos = await Todo.findOne({ _id: new ObjectId(req.params.id) });
    res.status(200).json(todos);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Failed to fetch todos" });
  }
}
export const editTodo= async (req, res) => {
  const { id } = req.params;
  const updatedTodo = req.body;
  try {
    const result = await Todo.findOneAndUpdate({ _id: new ObjectId(id) }, { $set: updatedTodo });
    if (result.modifiedCount === 0) {
      return res.status(404).json({ error: "Not updated" });
    }
    res.status(200).json({ message: "Todo updated successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to update todo" });
  }
}
export const deleteTodo=async (req, res) => {
  const { id } = req.params;
  try {
    const result = await Todo.deleteOne({ _id: new ObjectId(id) });
    if (result.deletedCount === 0) {
      return res.status(404).json({ error: "Todo not found" });
    }
    res.status(200).json({ message: "Todo deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete todo" });
  }
}