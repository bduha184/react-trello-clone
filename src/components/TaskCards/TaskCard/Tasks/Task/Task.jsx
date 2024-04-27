import React from 'react'
import "./Task.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { useSortable } from "@dnd-kit/sortable";

const Task = ({task,taskList,setTaskList}) => {

  const handleDelete = (id)=>{
    const tasks = taskList.filter(task=> task.id !== id)
    setTaskList(tasks);
  }

  const { attributes, listeners, setNodeRef, transform } = useSortable({
    id: task.id
  })

  return (
    <div className='taskBox'>
      <p className='taskText'>
      {task.text}
      </p>
      <button className='taskTrashButton' onClick={()=>handleDelete(task.id)}>
        <FontAwesomeIcon icon={faTrash} />
      </button>
    </div>
  )
}

export default Task;
