import Task from './Task'


//it shouldn't be part of component, instead should be part of state (tasks)


const Tasks = ({tasks}) => {
    
  return (
    //empty fragment
    //using .map and output jsx that rendering list, parent of list should have key prop and should be unique
    //looping...outputting component... and passing task
    <>
      {tasks.map((task)=> (
        <Task key={task.id} task={task}/>
        ))}
    </>
  )
}

export default Tasks
