import React, { useState } from 'react'
import "./TaskCards.css";
import TaskCard from './TaskCard/TaskCard';
import AddTaskCardButton from './AddTaskCardButton/AddTaskCardButton';
const TaskCards = () => {

  const [taskCardList, setTaskCardList] = useState([
    {
      id: 0
    }
  ]);

  return (
    <div className='taskCardsArea'>
      {taskCardList.map(taskCard => (
        <TaskCard
          key={taskCard.id}
          taskCardList={taskCardList}
          setTaskCardList={setTaskCardList}
          taskCardId = {taskCard.id}
        />
      ))}
      <AddTaskCardButton
        taskCardList={taskCardList}
        setTaskCardList={setTaskCardList}
      />
    </div>
  )
}

export default TaskCards
