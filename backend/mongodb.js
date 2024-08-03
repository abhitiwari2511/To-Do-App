const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const todoSchema = new mongoose.Schema({
    title: String,
    descripton: String,
    completed: Boolean
})

const todo = mongoose.model("todo", todoSchema);
module.exports = todo;