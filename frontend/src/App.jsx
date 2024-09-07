import { useEffect, useState } from 'react';
import './App.css'
import { CreateToDo } from './components/CreateToDo'
import { Todos } from './components/Todos'

function App() {

  const [todos, setTodos] = useState([]);

  // Fetch todos
  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const res = await fetch("http://localhost:3000/todos");
        const json = await res.json();
        setTodos(json.findTodos);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchTodos();
  }, []);
  
  return (
    <>
      <CreateToDo></CreateToDo>
      <Todos todos={todos} setTodos={setTodos}></Todos>
    </>
  )
}

export default App
