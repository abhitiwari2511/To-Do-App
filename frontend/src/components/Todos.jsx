import axios from "axios";

export function Todos({todos, setTodos}) {

  // update the todo as completed
  const updateTodo = async (_id) => {
    try {
      const response = await axios.put(`http://localhost:3000/completed/${_id}`, {
        id: _id,
      });
      const updatedTodo = response.data; // the updated todo

      // reflect the completed todo
      setTodos((prevTodos) =>
        prevTodos.map((todo) =>
          todo._id === updatedTodo._id ? { ...todo, completed: true } : todo
        )
      );
    } catch (error) {
      console.log(error.message);
    }
  };

    // to delete a todo
  const deleteTodo = async (_id) => {
    try {
      await axios.delete(`http://localhost:3000/delete/${_id}`,{
        id: _id,
      });
  
      console.log("Todo deleted:", _id);
  
      // to remove the deleted todo
      setTodos((prevTodos) =>
        prevTodos.filter((todo) => todo._id !== _id)
      );
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      {todos.map((todo) => (
        <div key={todo._id}>
          <h1>{todo.title}</h1>
          <h2>{todo.description}</h2>
          <button onClick={() => {
            updateTodo(todo._id)
            alert("Todo updated")
            }}>
            {todo.completed ? "Completed" : "Mark as complete"}
          </button>
          <button onClick={() => deleteTodo(todo._id)}>Delete</button>
        </div>
      ))}
    </>
  );
}