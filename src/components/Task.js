import { FaTimes } from 'react-icons/fa'

const Task = ({task, onDelete, onToggle}) => {

  const handleDelete = () =>{
    if(typeof onDelete === 'function'){
        onDelete(task.id);
    }else{
        console.error('onDelete is not a function');
    }
  }  
  return (
    <div title={`${task.text}`} className={`task ${task.reminder ? 'reminder': '' }`} onDoubleClick = {()=>onToggle(task.id)}>
   
        <h3>{task.text} 
          <FaTimes 
          style={{ color: 'red', cursor: 'pointer'}}                                
          onClick={handleDelete}
        />
        </h3>
        <p>{task.day}</p>
    </div>
  )
}
export default Task

