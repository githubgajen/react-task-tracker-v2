import { FaTimes } from 'react-icons/fa'

const Task = ({task, onDelete}) => {

  const handleDelete = () =>{
    //ensure onDelete is a function before calling it

    if(typeof onDelete === 'function'){
        onDelete(task.id);//ensure that onDelete is called with the task ID
    }else{
        console.error('onDelete is not a function');
    }
    //
  }  
  return (
    <div className="task">
   
        <h3>{task.text} <FaTimes style={{ color: 'red', cursor: 'pointer'}} 
         onClick={handleDelete}
        //onClick={() => onDelete(task.id)}
        />
        </h3>
        <p>{task.day}</p>
    </div>
  )
}

export default Task
//state gets pass down
//action gets pass up
