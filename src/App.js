import { useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid'
import './App.css'
import Main from './components/Main'
import Footer from './components/Footer'
import Header from './components/Header'

function App() {
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    const tasks = JSON.parse(localStorage.getItem('tasks'))
    if (tasks) {
      setTasks(tasks)
    }
  }, [])
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])

  const newTaskHandler = (text) => {
    const newTask = {
      text,
      section: 'backlog',
      id: uuidv4().slice(0, 5),
      description: '',
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

  const counter = (title) =>
    tasks.filter((task) => task.section === title).length

  const descriptionChange = (id, event) => {
    setTasks(
      tasks.map((task) => {
        return task.id === id
          ? { ...task, description: event.target.value }
          : { ...task }
      })
    )
  }

  return (
    <div className="App">
      <Header />
      <Main
        newTask={newTaskHandler}
        tasks={tasks}
        jumpTask={jumpTaskHandler}
        descriptionChange={descriptionChange}
      />
      <Footer counter={counter} clear={() => setTasks([])} />
    </div>
  )
}

export default App
