import React, { useState } from 'react'
import "./TaskAddInput.css";
import { v4 as uuid } from 'uuid';
const TaskAddInput = ({
   inputText,
   setInputText,
   taskList,
   setTaskList
   }) => {


  const handleSubmit = (e) => {
    e.preventDefault();
    if(inputText === "") return;
    setTaskList([
      ...taskList,
      {
        id: uuid(),
        text: inputText
      }
    ]);
    setInputText("");
  }

  const handleChange = (e) => {
    setInputText(e.target.value)
  }

  return (
    <div>
        <form onSubmit={handleSubmit}>
          <input placeholder='add a Task'
            onChange={handleChange}
            value={inputText}
            className='taskAddInput'
          />
        </form>
    </div>
  )
}

export default TaskAddInput
