const express = require("express");
const { createTodoSchema, updateTodoSchema } = require("./types");
const todo = require("./mongodb");
const app = express();
const cors = require("cors");
const port = 3000;
app.use(express.json());

app.use(cors());

app.post("/todo", async function(req, res) {
    const createTodo = req.body;
    console.log(createTodo);
    const parsedTodo = createTodoSchema.safeParse(createTodo);
    if (!parsedTodo.success) {
        res.status(411).json({
            msg: "invalid data",
        })
        return;
    }

    // putting in db
    await todo.create({
        title: createTodo.title,
        description: createTodo.description,
        completed: false
    }) 
    res.json({
        msg: "todo created"
    })
})

app.get("/todos", async function(req, res) {
    const findTodos = await todo.find({});
    res.json({
        findTodos
    });
})

app.put("/completed", async function(req, res) {
    const updateTodo = req.body;
    console.log("Request Body:", updateTodo); // logging request body to find errors

    const parsedTodo = updateTodoSchema.safeParse(updateTodo);
    if (!parsedTodo.success) {
        console.log("Validation Errors:", parsedTodo.error.errors); //validation errors
        res.status(411).json({
            msg: "invalid inputs",
        })
        return;
    }

    // updating the todo

    await todo.updateOne({
        _id: req.body.id
    }, {
        $set: {
            // title: req.body.title,
            // description: req.body.description,
            completed: true
        } 
    });
    
    res.json({
        msg: "todo marked as completed"
    });
})

app.listen(port);