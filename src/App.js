import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import './App.css'
import Main from './components/Main'

function App() {
  const [tasks, setTasks] = useState([])
  const newTaskHandler = (text) => {
    const newTask = {
      text,
      section: 'backlog',
      id: uuidv4(),
    }
    setTasks([...tasks, newTask])
  }
  const jumpTaskHandler = (id, title) => {
    setTasks(
      tasks.map((task) => {
        return task.id === id ? { ...task, section: title } : { ...task }
      })
    )
  }
  return (
    <div className="App">
      <Main newTask={newTaskHandler} tasks={tasks} jumpTask={jumpTaskHandler} />
    </div>
  )
}

export default App
