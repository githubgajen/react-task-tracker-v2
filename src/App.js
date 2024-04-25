import './App.css';
import ReactLogo from './components/ReactLogo';
import Header from './components/Header';
import Tasks from './components/Tasks';
import { useState } from 'react'

//import Translation from './components/Translation';


const App = () => {
  //state: tasks
    //update state: setTasks
    const [tasks, setTasks] = useState([
      {
          id: 1,
          text: 'Go To Gym',
          day:' 4 days a week at 6:00am',
          reminder: true
      },
      {
          id: 2,
          text: 'Cook Food',
          day:'3 days a week at 12:00pm',
          reminder: true
      },
      {
          id: 3,
          text:   'Go To Bed',
          day:' Every day at 11:59pm',
          reminder: false
      }
  ])
  return (
    <>
    <div><ReactLogo/></div>
    <div className="container">
      <Header/>
      <Tasks tasks={tasks}/>    
    </div>
  </> 
  );
}

export default App;


    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>