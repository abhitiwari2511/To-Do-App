import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { CreateToDo } from './components/CreateToDo'
import { Todos } from './components/Todos'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <CreateToDo></CreateToDo>
      <Todos></Todos>
    </>
  )
}

export default App
