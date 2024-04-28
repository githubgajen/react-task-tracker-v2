import './App.css';
import { useState } from 'react'
import { BrowserRouter as Router, Route }from 'react-router-dom'
import ReactLogo from './components/ReactLogo';
import Header from './components/Header';
import Footer from './components/Footer';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';
import About from './components/About';


const App = () => {
    const [showAddTask, setShowAddTask] = useState(false)

    const [tasks, setTasks] = useState([
      {
          id: 1,
          text: 'Go To Gym',
          day:' 4 days a week at 6:00am',
          reminder: true
      },
      {
          id: 2,
          text: 'Good/Cook Food',
          day:'3 days a week at 12:00pm',
          reminder: true
      },
      {
          id: 3,
          text:'Good Sleep',
          day:' Every day at 11:59pm',
          reminder: false
      }
  ])

  // Add Task
  const addTask = (task) => {
    //console.log(task)
    const id = Math.floor(Math.random() * 10000) + 1
    console.log(id)
    const newTask = { id, ...task }
    setTasks([...tasks, newTask])
  }

  const deleteTask = (id) => {
  setTasks(tasks.filter((task)=> task.id !== id))
  }
  const toggleReminder = (id)=>{
    setTasks(
      tasks.map((task)=>
        task.id === id ? { ...task, reminder: !task.reminder } : task 
    )
    )
  }

  return (
    <Router>
    <div><ReactLogo/></div>
    <div className="container">
      <Header 
        onAdd={() => setShowAddTask(!showAddTask)} 
        showAdd={showAddTask}
        />
        
        {showAddTask && <AddTask onAdd={addTask}/>}
        {tasks.length > 0 ? (
        <Tasks 
          tasks     = {tasks} 
          onDelete  = {deleteTask}
          onToggle  = {toggleReminder}
          />
        ): ('No Task To Show')}   
    <Route path='/about' component={About}/>
    <Footer/>
    </div>
  
 
  </Router>
  );
}
export default App;
