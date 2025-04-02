import { createContext, useState, useContext } from 'react'

const TaskContext = createContext();

export const TaskProvider = ({ children }) => {

  const [taskDetails, setTaskDetails] = useState({ 
    title: '', 
    description: '' 
  })

  const [tasks, setTasks] = useState([])
  const [filter, setFilter] = useState('all')

  const addTask = (e) => {
    e.preventDefault()
    
    if (!taskDetails.title.trim()) return;
  
    const newTask = {
      id: Date.now(),
      title: taskDetails.title,
      description: taskDetails.description,
      completed: false
    }
  
    setTasks([...tasks, newTask])
    setTaskDetails({ title: '', description: '' })
  }

  const deleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId))
  }

  const toggleTaskCompletion = (taskId) => {
    setTasks(tasks.map(task => 
      task.id === taskId ? { ...task, completed: !task.completed } : task
    ))
  }

  const filteredTasks = tasks.filter(task => {
    if (filter === 'completed') return task.completed
    if (filter === 'pending') return !task.completed
    return true
  })

  return (
    <TaskContext.Provider value={{
      taskDetails,
      setTaskDetails,
      tasks: filteredTasks,
      addTask,
      deleteTask,
      toggleTaskCompletion,
      setFilter
    }}>
      {children}
    </TaskContext.Provider>
  )
}

export const useTasks = () => useContext(TaskContext)