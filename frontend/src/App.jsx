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
        const res = await fetch("https://vercel.com/abhishek-tiwaris-projects-880cd6ab/to-do-app/9iwJBYto68VUSdMErPu8TdJdsidD/todos");
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
