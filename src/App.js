import './App.css';
import ReactLogo from './components/ReactLogo';
import Header from './components/Header';
import Tasks from './components/Tasks';
import { useState } from 'react'

const App = () => {
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

  const deleteTask = (id) => {
  setTasks(tasks.filter((task)=> task.id !== id))
}

  return (
    <>
    <div><ReactLogo/></div>
    <div className="container">
      <Header/>
        {tasks.length > 0 ? 
        <Tasks tasks={tasks} onDelete={deleteTask}/>
        :'No Task Available ...CHAKK KO PUWAL'}
    </div>
  </> 
  );
}
export default App;
