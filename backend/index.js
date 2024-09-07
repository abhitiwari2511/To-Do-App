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
    console.log(createTodo.title);
    console.log(createTodo.description);
    const parsedTodo = createTodoSchema.safeParse(createTodo);
    if (!parsedTodo.success) {
        res.status(411).json({
            msg: "invalid data",
        })
        return;
    }

    // putting in db
    const response = await todo.create({
        title: createTodo.title,
        description: createTodo.description,
        completed: false
    }) 
    console.log("response==>",response)
    res.json({
        msg: "todo created"
    })
})

app.get("/todos", async function(req, res) {
    try {
        const findTodos = await todo.find({});
        res.status(200).json({
        findTodos
    })
    } catch (err) {
        res.status(500).json({
            msg: "error in fetching todos"
        })
    };
})

app.put("/completed/:id", async function(req, res) {
    const updateTodo = req.body;
    console.log("Request Body:", updateTodo); // logging request body to find errors

    const parsedTodo = updateTodoSchema.safeParse(updateTodo);

    // updating the todo

    await todo.updateOne({
        _id: req.params.id
    }, {
        $set: {
            // title: req.body.title,
            // description: req.body.description,
            completed: true
        } 
    }, {
        new: true
    });
    
    res.json({
        msg: "todo marked as completed"
    });
})

app.delete("/delete/:id", async function (req, res) {
    try {
      const id = req.params.id;
      const result = await todo.findByIdAndDelete(id);
  
      if (!result) {
        return res.status(404).json({ msg: "Todo not found" });
      }
      res.json({ msg: "Todo deleted successfully", id });
    
    } catch (error) {
      console.log("Error deleting todo:", error);
      res.status(500).json({ msg: "Failed to delete todo", error: error.message });
    }
  });

app.listen(port);