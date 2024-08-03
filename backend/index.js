const express = require("express");
const { createTodoSchema } = require("./types");
const { todo } = require("./mongodb");
const app = express();
const port = 3000;
app.use(express.json());


app.post("./todo", async function(req, res) {
    const createTodo = req.body;
    const parsedTodo = createTodoSchema.safeParse(createTodo);
    if (!parsedTodo.success) {
        return res.status(411).json({
            msg: "invalid data",
        });
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

app.get("./todos", async function(req, res) {
    const findTodos = await todo.find({});
    res.json({
        msg: "todos found",
    });
})

app.put("./completed", async function(req, res) {
    const updateTodo = req.body;
    const parsedTodo = updateTodoSchema.safeParse(updateTodo);
    if (!parsedTodo.success) {
        return res.status(411).json(parsedTodo.error);
    }

    await todo.updateOne({
        _id: updateTodo.id
    }, {
        completed: true
    })

    res.json({
        msg: "todo updated"
    })
})

app.listen(port)