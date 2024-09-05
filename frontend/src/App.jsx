import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { CreateToDo } from './components/CreateToDo'
import { Todos } from './components/Todos'

function App() {
  const [todos, setTodos] = useState([]);

  // wrong way to coonnect backend
  const effect = useEffect(() => {
    fetch("http://localhost:3000/todos").then(async function(res){
      const json = await res.json();
      setTodos(json.findTodos);
    })}, [])
 

  return (
    <>
      <CreateToDo></CreateToDo>
      <Todos todos={todos}></Todos>
    </>
  )
}

export default App
