import React from 'react'
import "./TaskCardDeleteButton.css";
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const TaskCardDeleteButton = ({taskCardId,taskCardList,setTaskCardList}) => {

  const deleteTaskCard = (id)=>{
    const taskCards = taskCardList.filter(taskCard=> taskCard.id !== id)
    setTaskCardList(taskCards);
  }
  return (
    <div>
      <button className="taskCardDeleteButton"
      onClick={()=>deleteTaskCard(taskCardId)}
      >
        <FontAwesomeIcon icon={faXmark} />
        </button>
    </div>
  )
}

export default TaskCardDeleteButton
