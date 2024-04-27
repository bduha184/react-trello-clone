import React from 'react'
import "./AddTaskCardButton.css";
import { v4 as uuid } from 'uuid';

const AddTaskCardButton = ({taskCardList,setTaskCardList}) => {

  const taskCardId = uuid();
  const addTaskCard = ()=>{
    setTaskCardList([
      ...taskCardList,
      {
        id: taskCardId,
        draggableId:`task${taskCardId}`
      }
    ])
  }

  return (
    <div className='addTaskCardButtonArea'>
      <button className='addTaskCardButton' onClick={addTaskCard}>+</button>
    </div>
  )
}

export default AddTaskCardButton
