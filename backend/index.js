const express = require("express");
const { createTodoSchema } = require("./types");
const app = express();
const port = 3000;
app.use(express.json());


// put this in mongo db
app.post("./todo", function(req, res) {
    const createTodo = req.body;
    const parsedTodo = createTodoSchema.safeParse(createTodo);
    if (!parsedTodo.success) {
        return res.status(411).json(parsedTodo.error);
    }
})

app.get("./todos", function(req, res) {

})

app.put("./completed", function(req, res) {
    const updateTodo = req.body;
    const parsedTodo = updateTodoSchema.safeParse(updateTodo);
    if (!parsedTodo.success) {
        return res.status(411).json(parsedTodo.error);
    }
})

app.listen(port)