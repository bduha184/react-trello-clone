import React, { useState } from 'react'
import "./TaskCard.css";
import TaskCardTitle from './TaskCardTitle/TaskCardTitle';
import TaskCardDeleteButton from './TaskCardDeleteButton/TaskCardDeleteButton';
import TaskAddInput from './TaskAddInput/TaskAddInput';
import Tasks from './Tasks/Tasks';

const TaskCard = ({taskCardId,taskCardList,setTaskCardList}) => {
  const [inputText,setInputText] = useState("");
  const [taskList,setTaskList] = useState([])

  return (
    <div className='taskCard'>
      <div className='taskCardTitleAndTaskCardDeleteButton'>
      <TaskCardTitle />
      <TaskCardDeleteButton
        taskCardId={taskCardId}
        taskCardList={taskCardList}
        setTaskCardList={setTaskCardList}
      />
      </div>
      <TaskAddInput
        inputText={inputText}
        setInputText={setInputText}
        taskList={taskList}
        setTaskList={setTaskList}
        />
      <Tasks
        taskList={taskList}
        setTaskList={setTaskList}
      />
    </div>
  )
}

export default TaskCard
